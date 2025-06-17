var DataTypes = require("sequelize").DataTypes;
var _admin_event_entity = require("./admin_event_entity");
var _associated_policy = require("./associated_policy");
var _authentication_execution = require("./authentication_execution");
var _authentication_flow = require("./authentication_flow");
var _authenticator_config = require("./authenticator_config");
var _authenticator_config_entry = require("./authenticator_config_entry");
var _broker_link = require("./broker_link");
var _client = require("./client");
var _client_attributes = require("./client_attributes");
var _client_auth_flow_bindings = require("./client_auth_flow_bindings");
var _client_default_roles = require("./client_default_roles");
var _client_initial_access = require("./client_initial_access");
var _client_node_registrations = require("./client_node_registrations");
var _client_session = require("./client_session");
var _client_session_auth_status = require("./client_session_auth_status");
var _client_session_note = require("./client_session_note");
var _client_session_prot_mapper = require("./client_session_prot_mapper");
var _client_session_role = require("./client_session_role");
var _client_template = require("./client_template");
var _client_template_attributes = require("./client_template_attributes");
var _client_user_session_note = require("./client_user_session_note");
var _component = require("./component");
var _component_config = require("./component_config");
var _composite_role = require("./composite_role");
var _credential = require("./credential");
var _credential_attribute = require("./credential_attribute");
var _databasechangelog = require("./databasechangelog");
var _databasechangeloglock = require("./databasechangeloglock");
var _event_entity = require("./event_entity");
var _fed_credential_attribute = require("./fed_credential_attribute");
var _fed_user_attribute = require("./fed_user_attribute");
var _fed_user_consent = require("./fed_user_consent");
var _fed_user_consent_prot_mapper = require("./fed_user_consent_prot_mapper");
var _fed_user_consent_role = require("./fed_user_consent_role");
var _fed_user_credential = require("./fed_user_credential");
var _fed_user_group_membership = require("./fed_user_group_membership");
var _fed_user_required_action = require("./fed_user_required_action");
var _fed_user_role_mapping = require("./fed_user_role_mapping");
var _federated_identity = require("./federated_identity");
var _federated_user = require("./federated_user");
var _group_attribute = require("./group_attribute");
var _group_role_mapping = require("./group_role_mapping");
var _identity_provider = require("./identity_provider");
var _identity_provider_config = require("./identity_provider_config");
var _identity_provider_mapper = require("./identity_provider_mapper");
var _idp_mapper_config = require("./idp_mapper_config");
var _keycloak_group = require("./keycloak_group");
var _keycloak_role = require("./keycloak_role");
var _migration_model = require("./migration_model");
var _offline_client_session = require("./offline_client_session");
var _offline_user_session = require("./offline_user_session");
var _policy_config = require("./policy_config");
var _protocol_mapper = require("./protocol_mapper");
var _protocol_mapper_config = require("./protocol_mapper_config");
var _realm = require("./realm");
var _realm_attribute = require("./realm_attribute");
var _realm_default_groups = require("./realm_default_groups");
var _realm_default_roles = require("./realm_default_roles");
var _realm_enabled_event_types = require("./realm_enabled_event_types");
var _realm_events_listeners = require("./realm_events_listeners");
var _realm_required_credential = require("./realm_required_credential");
var _realm_smtp_config = require("./realm_smtp_config");
var _realm_supported_locales = require("./realm_supported_locales");
var _redirect_uris = require("./redirect_uris");
var _required_action_config = require("./required_action_config");
var _required_action_provider = require("./required_action_provider");
var _resource_policy = require("./resource_policy");
var _resource_scope = require("./resource_scope");
var _resource_server = require("./resource_server");
var _resource_server_policy = require("./resource_server_policy");
var _resource_server_resource = require("./resource_server_resource");
var _resource_server_scope = require("./resource_server_scope");
var _scope_mapping = require("./scope_mapping");
var _scope_policy = require("./scope_policy");
var _template_scope_mapping = require("./template_scope_mapping");
var _user_attribute = require("./user_attribute");
var _user_consent = require("./user_consent");
var _user_consent_prot_mapper = require("./user_consent_prot_mapper");
var _user_consent_role = require("./user_consent_role");
var _user_entity = require("./user_entity");
var _user_federation_config = require("./user_federation_config");
var _user_federation_mapper = require("./user_federation_mapper");
var _user_federation_mapper_config = require("./user_federation_mapper_config");
var _user_federation_provider = require("./user_federation_provider");
var _user_group_membership = require("./user_group_membership");
var _user_required_action = require("./user_required_action");
var _user_role_mapping = require("./user_role_mapping");
var _user_session = require("./user_session");
var _user_session_note = require("./user_session_note");
var _username_login_failure = require("./username_login_failure");
var _web_origins = require("./web_origins");

function initModels(sequelize) {
  var admin_event_entity = _admin_event_entity(sequelize, DataTypes);
  var associated_policy = _associated_policy(sequelize, DataTypes);
  var authentication_execution = _authentication_execution(sequelize, DataTypes);
  var authentication_flow = _authentication_flow(sequelize, DataTypes);
  var authenticator_config = _authenticator_config(sequelize, DataTypes);
  var authenticator_config_entry = _authenticator_config_entry(sequelize, DataTypes);
  var broker_link = _broker_link(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var client_attributes = _client_attributes(sequelize, DataTypes);
  var client_auth_flow_bindings = _client_auth_flow_bindings(sequelize, DataTypes);
  var client_default_roles = _client_default_roles(sequelize, DataTypes);
  var client_initial_access = _client_initial_access(sequelize, DataTypes);
  var client_node_registrations = _client_node_registrations(sequelize, DataTypes);
  var client_session = _client_session(sequelize, DataTypes);
  var client_session_auth_status = _client_session_auth_status(sequelize, DataTypes);
  var client_session_note = _client_session_note(sequelize, DataTypes);
  var client_session_prot_mapper = _client_session_prot_mapper(sequelize, DataTypes);
  var client_session_role = _client_session_role(sequelize, DataTypes);
  var client_template = _client_template(sequelize, DataTypes);
  var client_template_attributes = _client_template_attributes(sequelize, DataTypes);
  var client_user_session_note = _client_user_session_note(sequelize, DataTypes);
  var component = _component(sequelize, DataTypes);
  var component_config = _component_config(sequelize, DataTypes);
  var composite_role = _composite_role(sequelize, DataTypes);
  var credential = _credential(sequelize, DataTypes);
  var credential_attribute = _credential_attribute(sequelize, DataTypes);
  var databasechangelog = _databasechangelog(sequelize, DataTypes);
  var databasechangeloglock = _databasechangeloglock(sequelize, DataTypes);
  var event_entity = _event_entity(sequelize, DataTypes);
  var fed_credential_attribute = _fed_credential_attribute(sequelize, DataTypes);
  var fed_user_attribute = _fed_user_attribute(sequelize, DataTypes);
  var fed_user_consent = _fed_user_consent(sequelize, DataTypes);
  var fed_user_consent_prot_mapper = _fed_user_consent_prot_mapper(sequelize, DataTypes);
  var fed_user_consent_role = _fed_user_consent_role(sequelize, DataTypes);
  var fed_user_credential = _fed_user_credential(sequelize, DataTypes);
  var fed_user_group_membership = _fed_user_group_membership(sequelize, DataTypes);
  var fed_user_required_action = _fed_user_required_action(sequelize, DataTypes);
  var fed_user_role_mapping = _fed_user_role_mapping(sequelize, DataTypes);
  var federated_identity = _federated_identity(sequelize, DataTypes);
  var federated_user = _federated_user(sequelize, DataTypes);
  var group_attribute = _group_attribute(sequelize, DataTypes);
  var group_role_mapping = _group_role_mapping(sequelize, DataTypes);
  var identity_provider = _identity_provider(sequelize, DataTypes);
  var identity_provider_config = _identity_provider_config(sequelize, DataTypes);
  var identity_provider_mapper = _identity_provider_mapper(sequelize, DataTypes);
  var idp_mapper_config = _idp_mapper_config(sequelize, DataTypes);
  var keycloak_group = _keycloak_group(sequelize, DataTypes);
  var keycloak_role = _keycloak_role(sequelize, DataTypes);
  var migration_model = _migration_model(sequelize, DataTypes);
  var offline_client_session = _offline_client_session(sequelize, DataTypes);
  var offline_user_session = _offline_user_session(sequelize, DataTypes);
  var policy_config = _policy_config(sequelize, DataTypes);
  var protocol_mapper = _protocol_mapper(sequelize, DataTypes);
  var protocol_mapper_config = _protocol_mapper_config(sequelize, DataTypes);
  var realm = _realm(sequelize, DataTypes);
  var realm_attribute = _realm_attribute(sequelize, DataTypes);
  var realm_default_groups = _realm_default_groups(sequelize, DataTypes);
  var realm_default_roles = _realm_default_roles(sequelize, DataTypes);
  var realm_enabled_event_types = _realm_enabled_event_types(sequelize, DataTypes);
  var realm_events_listeners = _realm_events_listeners(sequelize, DataTypes);
  var realm_required_credential = _realm_required_credential(sequelize, DataTypes);
  var realm_smtp_config = _realm_smtp_config(sequelize, DataTypes);
  var realm_supported_locales = _realm_supported_locales(sequelize, DataTypes);
  var redirect_uris = _redirect_uris(sequelize, DataTypes);
  var required_action_config = _required_action_config(sequelize, DataTypes);
  var required_action_provider = _required_action_provider(sequelize, DataTypes);
  var resource_policy = _resource_policy(sequelize, DataTypes);
  var resource_scope = _resource_scope(sequelize, DataTypes);
  var resource_server = _resource_server(sequelize, DataTypes);
  var resource_server_policy = _resource_server_policy(sequelize, DataTypes);
  var resource_server_resource = _resource_server_resource(sequelize, DataTypes);
  var resource_server_scope = _resource_server_scope(sequelize, DataTypes);
  var scope_mapping = _scope_mapping(sequelize, DataTypes);
  var scope_policy = _scope_policy(sequelize, DataTypes);
  var template_scope_mapping = _template_scope_mapping(sequelize, DataTypes);
  var user_attribute = _user_attribute(sequelize, DataTypes);
  var user_consent = _user_consent(sequelize, DataTypes);
  var user_consent_prot_mapper = _user_consent_prot_mapper(sequelize, DataTypes);
  var user_consent_role = _user_consent_role(sequelize, DataTypes);
  var user_entity = _user_entity(sequelize, DataTypes);
  var user_federation_config = _user_federation_config(sequelize, DataTypes);
  var user_federation_mapper = _user_federation_mapper(sequelize, DataTypes);
  var user_federation_mapper_config = _user_federation_mapper_config(sequelize, DataTypes);
  var user_federation_provider = _user_federation_provider(sequelize, DataTypes);
  var user_group_membership = _user_group_membership(sequelize, DataTypes);
  var user_required_action = _user_required_action(sequelize, DataTypes);
  var user_role_mapping = _user_role_mapping(sequelize, DataTypes);
  var user_session = _user_session(sequelize, DataTypes);
  var user_session_note = _user_session_note(sequelize, DataTypes);
  var username_login_failure = _username_login_failure(sequelize, DataTypes);
  var web_origins = _web_origins(sequelize, DataTypes);

  client.belongsToMany(keycloak_role, { as: 'role_id_keycloak_roles', through: client_default_roles, foreignKey: "client_id", otherKey: "role_id" });
  client.belongsToMany(keycloak_role, { as: 'role_id_keycloak_role_scope_mappings', through: scope_mapping, foreignKey: "client_id", otherKey: "role_id" });
  client_template.belongsToMany(keycloak_role, { as: 'role_id_keycloak_role_template_scope_mappings', through: template_scope_mapping, foreignKey: "template_id", otherKey: "role_id" });
  keycloak_group.belongsToMany(keycloak_role, { as: 'role_id_keycloak_role_group_role_mappings', through: group_role_mapping, foreignKey: "group_id", otherKey: "role_id" });
  keycloak_group.belongsToMany(realm, { as: 'realm_id_realms', through: realm_default_groups, foreignKey: "group_id", otherKey: "realm_id" });
  keycloak_role.belongsToMany(client, { as: 'client_id_clients', through: client_default_roles, foreignKey: "role_id", otherKey: "client_id" });
  keycloak_role.belongsToMany(client, { as: 'client_id_client_scope_mappings', through: scope_mapping, foreignKey: "role_id", otherKey: "client_id" });
  keycloak_role.belongsToMany(client_template, { as: 'template_id_client_templates', through: template_scope_mapping, foreignKey: "role_id", otherKey: "template_id" });
  keycloak_role.belongsToMany(keycloak_group, { as: 'group_id_keycloak_groups', through: group_role_mapping, foreignKey: "role_id", otherKey: "group_id" });
  keycloak_role.belongsToMany(keycloak_role, { as: 'composite_keycloak_roles', through: composite_role, foreignKey: "child_role", otherKey: "composite" });
  keycloak_role.belongsToMany(keycloak_role, { as: 'child_role_keycloak_roles', through: composite_role, foreignKey: "composite", otherKey: "child_role" });
  keycloak_role.belongsToMany(realm, { as: 'realm_id_realm_realm_default_roles', through: realm_default_roles, foreignKey: "role_id", otherKey: "realm_id" });
  realm.belongsToMany(keycloak_group, { as: 'group_id_keycloak_group_realm_default_groups', through: realm_default_groups, foreignKey: "realm_id", otherKey: "group_id" });
  realm.belongsToMany(keycloak_role, { as: 'role_id_keycloak_role_realm_default_roles', through: realm_default_roles, foreignKey: "realm_id", otherKey: "role_id" });
  resource_server_policy.belongsToMany(resource_server_policy, { as: 'policy_id_resource_server_policies', through: associated_policy, foreignKey: "associated_policy_id", otherKey: "policy_id" });
  resource_server_policy.belongsToMany(resource_server_policy, { as: 'associated_policy_id_resource_server_policies', through: associated_policy, foreignKey: "policy_id", otherKey: "associated_policy_id" });
  resource_server_policy.belongsToMany(resource_server_resource, { as: 'resource_id_resource_server_resources', through: resource_policy, foreignKey: "policy_id", otherKey: "resource_id" });
  resource_server_policy.belongsToMany(resource_server_scope, { as: 'scope_id_resource_server_scope_scope_policies', through: scope_policy, foreignKey: "policy_id", otherKey: "scope_id" });
  resource_server_resource.belongsToMany(resource_server_policy, { as: 'policy_id_resource_server_policy_resource_policies', through: resource_policy, foreignKey: "resource_id", otherKey: "policy_id" });
  resource_server_resource.belongsToMany(resource_server_scope, { as: 'scope_id_resource_server_scopes', through: resource_scope, foreignKey: "resource_id", otherKey: "scope_id" });
  resource_server_scope.belongsToMany(resource_server_policy, { as: 'policy_id_resource_server_policy_scope_policies', through: scope_policy, foreignKey: "scope_id", otherKey: "policy_id" });
  resource_server_scope.belongsToMany(resource_server_resource, { as: 'resource_id_resource_server_resource_resource_scopes', through: resource_scope, foreignKey: "scope_id", otherKey: "resource_id" });
  authentication_execution.belongsTo(authentication_flow, { as: "flow", foreignKey: "flow_id"});
  authentication_flow.hasMany(authentication_execution, { as: "authentication_executions", foreignKey: "flow_id"});
  client_attributes.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(client_attributes, { as: "client_attributes", foreignKey: "client_id"});
  client_default_roles.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(client_default_roles, { as: "client_default_roles", foreignKey: "client_id"});
  client_node_registrations.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(client_node_registrations, { as: "client_node_registrations", foreignKey: "client_id"});
  keycloak_role.belongsTo(client, { as: "client_client", foreignKey: "client"});
  client.hasMany(keycloak_role, { as: "keycloak_roles", foreignKey: "client"});
  protocol_mapper.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(protocol_mapper, { as: "protocol_mappers", foreignKey: "client_id"});
  realm.belongsTo(client, { as: "master_admin_client_client", foreignKey: "master_admin_client"});
  client.hasMany(realm, { as: "master_admin_client_realms", foreignKey: "master_admin_client"});
  redirect_uris.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(redirect_uris, { as: "redirect_uris", foreignKey: "client_id"});
  scope_mapping.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(scope_mapping, { as: "scope_mappings", foreignKey: "client_id"});
  web_origins.belongsTo(client, { as: "client", foreignKey: "client_id"});
  client.hasMany(web_origins, { as: "web_origins", foreignKey: "client_id"});
  client_session_auth_status.belongsTo(client_session, { as: "client_session_client_session", foreignKey: "client_session"});
  client_session.hasMany(client_session_auth_status, { as: "client_session_auth_statuses", foreignKey: "client_session"});
  client_session_note.belongsTo(client_session, { as: "client_session_client_session", foreignKey: "client_session"});
  client_session.hasMany(client_session_note, { as: "client_session_notes", foreignKey: "client_session"});
  client_session_prot_mapper.belongsTo(client_session, { as: "client_session_client_session", foreignKey: "client_session"});
  client_session.hasMany(client_session_prot_mapper, { as: "client_session_prot_mappers", foreignKey: "client_session"});
  client_session_role.belongsTo(client_session, { as: "client_session_client_session", foreignKey: "client_session"});
  client_session.hasMany(client_session_role, { as: "client_session_roles", foreignKey: "client_session"});
  client_user_session_note.belongsTo(client_session, { as: "client_session_client_session", foreignKey: "client_session"});
  client_session.hasMany(client_user_session_note, { as: "client_user_session_notes", foreignKey: "client_session"});
  client.belongsTo(client_template, { as: "client_template", foreignKey: "client_template_id"});
  client_template.hasMany(client, { as: "clients", foreignKey: "client_template_id"});
  client_template_attributes.belongsTo(client_template, { as: "template", foreignKey: "template_id"});
  client_template.hasMany(client_template_attributes, { as: "client_template_attributes", foreignKey: "template_id"});
  protocol_mapper.belongsTo(client_template, { as: "client_template", foreignKey: "client_template_id"});
  client_template.hasMany(protocol_mapper, { as: "protocol_mappers", foreignKey: "client_template_id"});
  template_scope_mapping.belongsTo(client_template, { as: "template", foreignKey: "template_id"});
  client_template.hasMany(template_scope_mapping, { as: "template_scope_mappings", foreignKey: "template_id"});
  component_config.belongsTo(component, { as: "component", foreignKey: "component_id"});
  component.hasMany(component_config, { as: "component_configs", foreignKey: "component_id"});
  credential_attribute.belongsTo(credential, { as: "credential", foreignKey: "credential_id"});
  credential.hasMany(credential_attribute, { as: "credential_attributes", foreignKey: "credential_id"});
  fed_credential_attribute.belongsTo(fed_user_credential, { as: "credential", foreignKey: "credential_id"});
  fed_user_credential.hasMany(fed_credential_attribute, { as: "fed_credential_attributes", foreignKey: "credential_id"});
  identity_provider_config.belongsTo(identity_provider, { as: "identity_provider", foreignKey: "identity_provider_id"});
  identity_provider.hasMany(identity_provider_config, { as: "identity_provider_configs", foreignKey: "identity_provider_id"});
  idp_mapper_config.belongsTo(identity_provider_mapper, { as: "idp_mapper", foreignKey: "idp_mapper_id"});
  identity_provider_mapper.hasMany(idp_mapper_config, { as: "idp_mapper_configs", foreignKey: "idp_mapper_id"});
  group_attribute.belongsTo(keycloak_group, { as: "group", foreignKey: "group_id"});
  keycloak_group.hasMany(group_attribute, { as: "group_attributes", foreignKey: "group_id"});
  group_role_mapping.belongsTo(keycloak_group, { as: "group", foreignKey: "group_id"});
  keycloak_group.hasMany(group_role_mapping, { as: "group_role_mappings", foreignKey: "group_id"});
  realm_default_groups.belongsTo(keycloak_group, { as: "group", foreignKey: "group_id"});
  keycloak_group.hasOne(realm_default_groups, { as: "realm_default_group", foreignKey: "group_id"});
  client_default_roles.belongsTo(keycloak_role, { as: "role", foreignKey: "role_id"});
  keycloak_role.hasOne(client_default_roles, { as: "client_default_role", foreignKey: "role_id"});
  composite_role.belongsTo(keycloak_role, { as: "child_role_keycloak_role", foreignKey: "child_role"});
  keycloak_role.hasMany(composite_role, { as: "composite_roles", foreignKey: "child_role"});
  composite_role.belongsTo(keycloak_role, { as: "composite_keycloak_role", foreignKey: "composite"});
  keycloak_role.hasMany(composite_role, { as: "composite_composite_roles", foreignKey: "composite"});
  group_role_mapping.belongsTo(keycloak_role, { as: "role", foreignKey: "role_id"});
  keycloak_role.hasMany(group_role_mapping, { as: "group_role_mappings", foreignKey: "role_id"});
  realm_default_roles.belongsTo(keycloak_role, { as: "role", foreignKey: "role_id"});
  keycloak_role.hasOne(realm_default_roles, { as: "realm_default_role", foreignKey: "role_id"});
  scope_mapping.belongsTo(keycloak_role, { as: "role", foreignKey: "role_id"});
  keycloak_role.hasMany(scope_mapping, { as: "scope_mappings", foreignKey: "role_id"});
  template_scope_mapping.belongsTo(keycloak_role, { as: "role", foreignKey: "role_id"});
  keycloak_role.hasMany(template_scope_mapping, { as: "template_scope_mappings", foreignKey: "role_id"});
  protocol_mapper_config.belongsTo(protocol_mapper, { as: "protocol_mapper", foreignKey: "protocol_mapper_id"});
  protocol_mapper.hasMany(protocol_mapper_config, { as: "protocol_mapper_configs", foreignKey: "protocol_mapper_id"});
  authentication_execution.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(authentication_execution, { as: "authentication_executions", foreignKey: "realm_id"});
  authentication_flow.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(authentication_flow, { as: "authentication_flows", foreignKey: "realm_id"});
  authenticator_config.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(authenticator_config, { as: "authenticator_configs", foreignKey: "realm_id"});
  client.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(client, { as: "clients", foreignKey: "realm_id"});
  client_initial_access.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(client_initial_access, { as: "client_initial_accesses", foreignKey: "realm_id"});
  client_template.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(client_template, { as: "client_templates", foreignKey: "realm_id"});
  component.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(component, { as: "components", foreignKey: "realm_id"});
  identity_provider.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(identity_provider, { as: "identity_providers", foreignKey: "realm_id"});
  identity_provider_mapper.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(identity_provider_mapper, { as: "identity_provider_mappers", foreignKey: "realm_id"});
  keycloak_group.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(keycloak_group, { as: "keycloak_groups", foreignKey: "realm_id"});
  keycloak_role.belongsTo(realm, { as: "realm_realm", foreignKey: "realm"});
  realm.hasMany(keycloak_role, { as: "keycloak_roles", foreignKey: "realm"});
  realm_attribute.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(realm_attribute, { as: "realm_attributes", foreignKey: "realm_id"});
  realm_default_groups.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(realm_default_groups, { as: "realm_default_groups", foreignKey: "realm_id"});
  realm_default_roles.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(realm_default_roles, { as: "realm_default_roles", foreignKey: "realm_id"});
  realm_enabled_event_types.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(realm_enabled_event_types, { as: "realm_enabled_event_types", foreignKey: "realm_id"});
  realm_events_listeners.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(realm_events_listeners, { as: "realm_events_listeners", foreignKey: "realm_id"});
  realm_required_credential.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(realm_required_credential, { as: "realm_required_credentials", foreignKey: "realm_id"});
  realm_smtp_config.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(realm_smtp_config, { as: "realm_smtp_configs", foreignKey: "realm_id"});
  realm_supported_locales.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(realm_supported_locales, { as: "realm_supported_locales", foreignKey: "realm_id"});
  required_action_provider.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(required_action_provider, { as: "required_action_providers", foreignKey: "realm_id"});
  user_federation_mapper.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(user_federation_mapper, { as: "user_federation_mappers", foreignKey: "realm_id"});
  user_federation_provider.belongsTo(realm, { as: "realm", foreignKey: "realm_id"});
  realm.hasMany(user_federation_provider, { as: "user_federation_providers", foreignKey: "realm_id"});
  resource_server_policy.belongsTo(resource_server, { as: "resource_server", foreignKey: "resource_server_id"});
  resource_server.hasMany(resource_server_policy, { as: "resource_server_policies", foreignKey: "resource_server_id"});
  resource_server_resource.belongsTo(resource_server, { as: "resource_server", foreignKey: "resource_server_id"});
  resource_server.hasMany(resource_server_resource, { as: "resource_server_resources", foreignKey: "resource_server_id"});
  resource_server_scope.belongsTo(resource_server, { as: "resource_server", foreignKey: "resource_server_id"});
  resource_server.hasMany(resource_server_scope, { as: "resource_server_scopes", foreignKey: "resource_server_id"});
  associated_policy.belongsTo(resource_server_policy, { as: "associated_policy", foreignKey: "associated_policy_id"});
  resource_server_policy.hasMany(associated_policy, { as: "associated_policies", foreignKey: "associated_policy_id"});
  associated_policy.belongsTo(resource_server_policy, { as: "policy", foreignKey: "policy_id"});
  resource_server_policy.hasMany(associated_policy, { as: "policy_associated_policies", foreignKey: "policy_id"});
  policy_config.belongsTo(resource_server_policy, { as: "policy", foreignKey: "policy_id"});
  resource_server_policy.hasMany(policy_config, { as: "policy_configs", foreignKey: "policy_id"});
  resource_policy.belongsTo(resource_server_policy, { as: "policy", foreignKey: "policy_id"});
  resource_server_policy.hasMany(resource_policy, { as: "resource_policies", foreignKey: "policy_id"});
  scope_policy.belongsTo(resource_server_policy, { as: "policy", foreignKey: "policy_id"});
  resource_server_policy.hasMany(scope_policy, { as: "scope_policies", foreignKey: "policy_id"});
  resource_policy.belongsTo(resource_server_resource, { as: "resource", foreignKey: "resource_id"});
  resource_server_resource.hasMany(resource_policy, { as: "resource_policies", foreignKey: "resource_id"});
  resource_scope.belongsTo(resource_server_resource, { as: "resource", foreignKey: "resource_id"});
  resource_server_resource.hasMany(resource_scope, { as: "resource_scopes", foreignKey: "resource_id"});
  resource_scope.belongsTo(resource_server_scope, { as: "scope", foreignKey: "scope_id"});
  resource_server_scope.hasMany(resource_scope, { as: "resource_scopes", foreignKey: "scope_id"});
  scope_policy.belongsTo(resource_server_scope, { as: "scope", foreignKey: "scope_id"});
  resource_server_scope.hasMany(scope_policy, { as: "scope_policies", foreignKey: "scope_id"});
  user_consent_prot_mapper.belongsTo(user_consent, { as: "user_consent", foreignKey: "user_consent_id"});
  user_consent.hasMany(user_consent_prot_mapper, { as: "user_consent_prot_mappers", foreignKey: "user_consent_id"});
  user_consent_role.belongsTo(user_consent, { as: "user_consent", foreignKey: "user_consent_id"});
  user_consent.hasMany(user_consent_role, { as: "user_consent_roles", foreignKey: "user_consent_id"});
  credential.belongsTo(user_entity, { as: "user", foreignKey: "user_id"});
  user_entity.hasMany(credential, { as: "credentials", foreignKey: "user_id"});
  federated_identity.belongsTo(user_entity, { as: "user", foreignKey: "user_id"});
  user_entity.hasMany(federated_identity, { as: "federated_identities", foreignKey: "user_id"});
  user_attribute.belongsTo(user_entity, { as: "user", foreignKey: "user_id"});
  user_entity.hasMany(user_attribute, { as: "user_attributes", foreignKey: "user_id"});
  user_consent.belongsTo(user_entity, { as: "user", foreignKey: "user_id"});
  user_entity.hasMany(user_consent, { as: "user_consents", foreignKey: "user_id"});
  user_group_membership.belongsTo(user_entity, { as: "user", foreignKey: "user_id"});
  user_entity.hasMany(user_group_membership, { as: "user_group_memberships", foreignKey: "user_id"});
  user_required_action.belongsTo(user_entity, { as: "user", foreignKey: "user_id"});
  user_entity.hasMany(user_required_action, { as: "user_required_actions", foreignKey: "user_id"});
  user_role_mapping.belongsTo(user_entity, { as: "user", foreignKey: "user_id"});
  user_entity.hasMany(user_role_mapping, { as: "user_role_mappings", foreignKey: "user_id"});
  user_federation_mapper_config.belongsTo(user_federation_mapper, { as: "user_federation_mapper", foreignKey: "user_federation_mapper_id"});
  user_federation_mapper.hasMany(user_federation_mapper_config, { as: "user_federation_mapper_configs", foreignKey: "user_federation_mapper_id"});
  user_federation_config.belongsTo(user_federation_provider, { as: "user_federation_provider", foreignKey: "user_federation_provider_id"});
  user_federation_provider.hasMany(user_federation_config, { as: "user_federation_configs", foreignKey: "user_federation_provider_id"});
  user_federation_mapper.belongsTo(user_federation_provider, { as: "federation_provider", foreignKey: "federation_provider_id"});
  user_federation_provider.hasMany(user_federation_mapper, { as: "user_federation_mappers", foreignKey: "federation_provider_id"});
  client_session.belongsTo(user_session, { as: "session", foreignKey: "session_id"});
  user_session.hasMany(client_session, { as: "client_sessions", foreignKey: "session_id"});
  user_session_note.belongsTo(user_session, { as: "user_session_user_session", foreignKey: "user_session"});
  user_session.hasMany(user_session_note, { as: "user_session_notes", foreignKey: "user_session"});

  return {
    admin_event_entity,
    associated_policy,
    authentication_execution,
    authentication_flow,
    authenticator_config,
    authenticator_config_entry,
    broker_link,
    client,
    client_attributes,
    client_auth_flow_bindings,
    client_default_roles,
    client_initial_access,
    client_node_registrations,
    client_session,
    client_session_auth_status,
    client_session_note,
    client_session_prot_mapper,
    client_session_role,
    client_template,
    client_template_attributes,
    client_user_session_note,
    component,
    component_config,
    composite_role,
    credential,
    credential_attribute,
    databasechangelog,
    databasechangeloglock,
    event_entity,
    fed_credential_attribute,
    fed_user_attribute,
    fed_user_consent,
    fed_user_consent_prot_mapper,
    fed_user_consent_role,
    fed_user_credential,
    fed_user_group_membership,
    fed_user_required_action,
    fed_user_role_mapping,
    federated_identity,
    federated_user,
    group_attribute,
    group_role_mapping,
    identity_provider,
    identity_provider_config,
    identity_provider_mapper,
    idp_mapper_config,
    keycloak_group,
    keycloak_role,
    migration_model,
    offline_client_session,
    offline_user_session,
    policy_config,
    protocol_mapper,
    protocol_mapper_config,
    realm,
    realm_attribute,
    realm_default_groups,
    realm_default_roles,
    realm_enabled_event_types,
    realm_events_listeners,
    realm_required_credential,
    realm_smtp_config,
    realm_supported_locales,
    redirect_uris,
    required_action_config,
    required_action_provider,
    resource_policy,
    resource_scope,
    resource_server,
    resource_server_policy,
    resource_server_resource,
    resource_server_scope,
    scope_mapping,
    scope_policy,
    template_scope_mapping,
    user_attribute,
    user_consent,
    user_consent_prot_mapper,
    user_consent_role,
    user_entity,
    user_federation_config,
    user_federation_mapper,
    user_federation_mapper_config,
    user_federation_provider,
    user_group_membership,
    user_required_action,
    user_role_mapping,
    user_session,
    user_session_note,
    username_login_failure,
    web_origins,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
