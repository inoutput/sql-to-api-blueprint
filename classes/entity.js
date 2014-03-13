var inflection = require('inflection');
var _ = require('lodash');

var Entity = function(name, fields) {
	this.name = name;
	this.fields = fields;
	this.singular_name = inflection.singularize(this.name);
	this.singular_resource = null;
	this.sample_data = {};
	this.json_headers = [
		{
			name: 'Content-Type',
			value: 'application/json'
		}
	];

	this.init = function() {
		this.setupSampleData();
	};

	this.getResourceGroup = function() {
		this.resource_group = {
			name: this.singular_name,
			description: this.getDescription(),
			resources: [
				this.getSingularResource(),
				this.getCollectionResource()
			]
		};

		return this.resource_group;
	};

	this.getDescription = function() {
		return [
			'The ' + this.singular_name + ' resource is responsible for managing all interactions with ' + this.name + ' in the system.\n\n',
			('A ' + this.singular_name + ' has the following attributes:\n\n'),
			this.fields.map(function(m){ return ('- ' + m.name + ' (' + m.type.toLowerCase() + (m.notNull ? ', required' : '') + ')'); }).join('\n')
		].join('');
	};

	this.setupSampleData = function() {
		this.sample_data.obj = {};
		this.sample_data.obj_new = {};

		this.fields.forEach(_.bind(function(field){
			this.sample_data.obj[field.name] = '';
			if(field.name.toLowerCase() !== 'id') {
				this.sample_data.obj_new[field.name] = '';
			}
		}, this));

		this.sample_data.collection_str = (JSON.stringify([this.sample_data.obj, this.sample_data.obj], null, 4) + '\n\n');
		this.sample_data.existing_str = (JSON.stringify(this.sample_data.obj, null, 4) + '\n\n');
		this.sample_data.new_str = (JSON.stringify(this.sample_data.obj_new, null, 4) + '\n\n');
	};

	this.getSingularResource = function() {
		this.singular_resource = {
			name: this.singular_name,
			description: '',
			uriTemplate: ('/' +   this.name + '/{id}'),
			model: {
				name: this.singular_name,
				description: ('JSON representation of ' + this.singular_name + ' resource'),
				headers: this.json_headers,
				body: this.sample_data.existing_str
			},
			parameters: [
				{
					name: 'id',
					description: ('Unique id of the ' + this.singular_name),
					type: "Integer",
					required: true
				}
			],
			actions:[]
		};

		this.createSingularResourceActions();

		return this.singular_resource;
	};

	this.createSingularResourceActions = function() {
		//add GET
		this.singular_resource.actions.push({
			name: ('Get a ' + this.singular_name),
			method: 'GET',
			examples:[
				{
					requests: [],
					responses: [
						{
							name: 200,
							headers: this.json_headers,
							body: this.sample_data.existing_str
						}
					]
				}
			]
		});

		//add PUT
		this.singular_resource.actions.push({
			name: ('Update a ' + this.singular_name),
			method: 'PUT',
			examples:[
				{
					requests: [
						{
							body: this.sample_data.new_str
						}
					],
					responses: [
						{
							name: 200,
							headers: this.json_headers,
							body: this.sample_data.existing_str
						}
					]
				}
			]
		});

		//add DELETE
		this.singular_resource.actions.push({
			name: ('Delete a ' + this.singular_name),
			method: 'DELETE',
			examples:[
				{
					responses: [
						{
							name: 204
						}
					]
				}
			]
		});
	};


	this.getCollectionResource = function() {
		this.collection_resource = {
			name: this.name,
			uriTemplate: ('/' + this.name),
			model: {
				name: this.singular_name,
				headers: this.json_headers,
				body: this.sample_data.collection_str
			},
			actions:[]
		};

		this.createCollectionResourceActions();
		return this.collection_resource;
	};

	this.createCollectionResourceActions = function() {
		//add GET
		this.collection_resource.actions.push({
			name: ('List all ' + this.name),
			method: 'GET',
			examples:[
				{
					requests: [],
					responses: [
						{
							name: 200,
							headers: this.json_headers,
							body: this.sample_data.collection_str
						}
					]
				}
			]
		});

		//add POST
		this.collection_resource.actions.push({
			name: ('Create new a ' + this.singular_name),
			method: 'POST',
			examples:[
				{
					requests: [
						{
							body: this.sample_data.new_str
						}
					],
					responses: [
						{
							name: 201,
							headers: this.json_headers,
							body: this.sample_data.existing_str
						}
					]
				}
			]
		});
	};

	this.init();
};

module.exports = Entity;