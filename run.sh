#!/bin/sh

echo "------------------------------------------------------------------------"
echo " WATSON (Personality Insights) endpoint "
echo "------------------------------------------------------------------------"
cd $IDEA2_HOME/platform/integrations/endpoints/watson-personality-insights

# System properties
export _endpoint_name=watsonPersonalityInsights
export _app_name=test1
export _environment=dev
export _pod_id=id
export _profile=default
export _custom_domain=

export _debug=true
export _local_deployment=true

export _webservices_port=10000
export _base_domain=localhost:8000
export _endpoints_services_api=http://localhost:2233/api
export _token=test1/dev/watsonPersonalityInsights

export LOGENTRIES_TOKEN=2e47ebe8-46ae-48db-90ca-63fbb2a16924

# Endpoint specific properties
export _endpoint_config="{\"username\":\"3c5d3e5f-74d9-41ab-9370-23d168b27f03\",\"password\":\"GzAz7WTrujhH\"}"

npm install
node endpoint.js
echo "------------------------------------------------------------------------"
echo " END - WATSON (Personality Insights) endpoint "
echo "------------------------------------------------------------------------"

