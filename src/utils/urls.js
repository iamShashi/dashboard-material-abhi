const {
    REACT_APP_LMS_PATH,
    REACT_APP_BACKEND_CRM_PATH,
    REACT_APP_AVYUKTA_DOMAIN,
  } = process.env;
  
  const URLS = {
    global: {
      esearch: `${REACT_APP_LMS_PATH}e-search`,
      search: `${REACT_APP_LMS_PATH}search/get-ajax-data`,
      collegeSearch: `${REACT_APP_LMS_PATH}search/client/college`,
      logout: `${REACT_APP_LMS_PATH}logout`,
      avyuktaLogin: `${REACT_APP_AVYUKTA_DOMAIN}agent/avyukta.php?VD_login=:agentId&VD_campaign=crm:agentId&phone_login=:agentId&phone_pass=:agentId&VD_pass=:agentId`,
      avyuktaLogout: `${REACT_APP_AVYUKTA_DOMAIN}API/click2call.php?function=logout&user=:agentId&alt_user=:agentId&status=LOGOUT`,
      status: `${REACT_APP_BACKEND_CRM_PATH}av/agent/status`,
      changeUserStatus: `${REACT_APP_BACKEND_CRM_PATH}av/agent/changeStatus`,
      changeCallStatus: `${REACT_APP_BACKEND_CRM_PATH}av/call/changeStatus`,
      hold: `${REACT_APP_BACKEND_CRM_PATH}av/call/hold`,
      call: `${REACT_APP_BACKEND_CRM_PATH}av/call`,
      manualDialler: `${REACT_APP_BACKEND_CRM_PATH}lead/find-or-create`,
      bulkProcess: `${REACT_APP_LMS_PATH}lms/leads/bulkProcess`,
    },
    leadpanel: {
      lead: `${REACT_APP_BACKEND_CRM_PATH}lead/:uid`,
      fields: `${REACT_APP_LMS_PATH}customer-form/get/`,
      save: `${REACT_APP_BACKEND_CRM_PATH}call/store-call-data`,
      activity: `${REACT_APP_BACKEND_CRM_PATH}lead/:uid/activity`,
      storeActivity: `${REACT_APP_BACKEND_CRM_PATH}lead/:uid/activity`,
      editActivity: `${REACT_APP_BACKEND_CRM_PATH}lead/:uid/activity/:callId`,
      tasks: `${REACT_APP_BACKEND_CRM_PATH}call/:phone/tasks`,
      formdata: `${REACT_APP_BACKEND_CRM_PATH}call/fetch-form-data`,
      upload: `${REACT_APP_BACKEND_CRM_PATH}call/upload/doc`,
      dispositions: `${REACT_APP_LMS_PATH}disposition/get/`,
      callback: `${REACT_APP_BACKEND_CRM_PATH}av/agent/callback`,
      leadHistory: `${REACT_APP_LMS_PATH}leads/get-leads-for-email`,
      availableCampaigns: `${REACT_APP_LMS_PATH}lms/availableCampaigns`,
      pushLeads: `${REACT_APP_BACKEND_CRM_PATH}lead/push-to-campaign`,
      newLead: `${REACT_APP_LMS_PATH}lms/create-new-lead`,
      apiResponse: `${REACT_APP_LMS_PATH}lms/lead-camp-api-response`,
      getTemplates: `${REACT_APP_LMS_PATH}lms/get-templates`,
      templatePreview: `${REACT_APP_LMS_PATH}sms-email/preview-template`,
      templateHistory: `${REACT_APP_LMS_PATH}lms/sms-email/send-details`,
      shootMail: `${REACT_APP_LMS_PATH}lms/shoot-email`,
      shootSms: `${REACT_APP_LMS_PATH}lms/shoot-sms`
    },
    listing: {
      data: `${REACT_APP_BACKEND_CRM_PATH}call/listing`,
      agents: `${REACT_APP_LMS_PATH}getAgents`,
      transferOwner: `${REACT_APP_LMS_PATH}transfer-lead-owner`,
      dispositions: `${REACT_APP_LMS_PATH}disposition/all`,
    },
    reporting: {
      data: `${REACT_APP_BACKEND_CRM_PATH}agents/agent-stats`,
      dailerMapping: `${REACT_APP_LMS_PATH}dialler-mapping`,
      pushLeads: `${REACT_APP_LMS_PATH}lms/agent-lead-push`,
    },
    csvuploader: {
      upload: `${REACT_APP_BACKEND_CRM_PATH}lead/upload-agent-tag-csv`,
      headers: `${REACT_APP_BACKEND_CRM_PATH}lead/agent-tag-csv-headers`,
    },
    dashboard:{
      agentsPauseTime: `${REACT_APP_BACKEND_CRM_PATH}agents/pause-time`,
      agentsLeadCount: `${REACT_APP_BACKEND_CRM_PATH}agents/lead-count`,
      hopperLeadCount: `${REACT_APP_BACKEND_CRM_PATH}av/agent/lead-count`,
    },
    crmreporting:{
      agentsReport: `${REACT_APP_BACKEND_CRM_PATH}agents/agent-report`,
    },
  };
  
  export const getURL = ({
    page = 'global', controller, extras = '', params = {},
  }) => {
    const url = URLS[page][controller];
    const paramKeys = Object.keys(params);
    let parsedUrl = url;
    if (paramKeys.length) {
      //* replace variable params in urls with provied values *//
      paramKeys.forEach((key) => {
        const regex = new RegExp(`:${key}`, 'g');
        parsedUrl = parsedUrl.replace(regex, params[key]);
      });
    } else {
      parsedUrl = url + extras;
    }
  
    return parsedUrl;
  };
  
  export default URLS;
  