# ThinCats rebuild
thincats-c1f1e998f5d9.json needs to be in this dir.

deployment:
docker build . --tag asia.gcr.io/firm-champion-204312/thincats:v0.2
docker push asia.gcr.io/firm-champion-204312/thincats:v0.2
gcloud beta compute instances update-container instance-1 --container-image asia.gcr.io/firm-champion-204312/thincats:v0.2

asia.gcr.io/firm-champion-204312/thincats
docker tag 5f19d9e179e2 asia.gcr.io/firm-champion-204312/thincats:v0.2

todo:
faq links need to be working
bring back page transitions with transform will-change and backface for own rendering layer
top menu needs some jazzing up
FAQ needs to be its own section
Resources needs to be borrower info and investor info
fix formatting of resources
fix homepage page 3 alignment - maybe use one column many rows rather than two columns
unscrew mobile view

staging/prod variable for golang. should include the json key and env var for running it. Include the path export in go generate as well as the docker builds.
todo put all golang stuff in a cloud function?
projectID: override hardcoded projectID

Description:structure of content posts:
Release will only support blog posts
Will have a read only html content viewer and a html source code editor
Also static list of existing posts with delete buttons on them
can add new post or delete posts
posts use mounted mongo container served by golang endpoint

build a little dev cmd tool to run all the build stuff like before

cache resource rendering/processing
router should separate out anchors and queries with ? for page routes
add compact=false to babelrc for dev build to help readability
ping insightly when you request a borrower application
offer to manage site uptime for half of otheras price

home similar to:
https://www.gitbook.com/

Homepage like bigstone capital or birchal 
or 
https://material-ui-next.com/
with black/white

resources:
link all old URLs to various pages on the reosurces tab
like gitbook stuff
https://mobx.js.org/refguide/api.html
crossed with grid menus
https://material-ui-next.com/layout/grid/


