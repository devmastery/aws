##Install NodeJs

curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -

yum -y install nodejs


##Download Source Code from Github

wget --no-check-certificate https://github.com/devmastery/dimusic/tarball/master -O - | tar xz


##Setup NPM Packages

npm install


##Setup Forever 

npm install forever -g


##Setup Forever service

npm install forever-service -g


##Setup NodeJs App as a service

sudo forever-service install dimusic

## Remover forever service
sudo forever-service delete dimusic

##Service Operations

p sudo service dimusic start 
p sudo service dimusic stop
p sudo service dimusic restart
p sudo service dimusic status