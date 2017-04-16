# Craft Kit - Bedrock (WordPress)
This is the official [craft kit](http://mason.ci/docs/craft-kits) for [Bedrock](https://roots.io/bedrock/) by [Codemason](http://mason.ci). 

```
$ mason craft bedrock
```

Craft kits let you Dockerize your application with one command. They are an excellent way to ease into building Docker powered apps without having to learn the ins and outs of Docker.

Then with [Codemason](http://mason.ci), you can deploy your app to a server in a matter of minutes!

## Requirements 
> This guide assumes you have:
> - Installed the [Mason CLI](http://mason.ci/docs/installation)

## Configuration
Copy the `.env.example` file to `.env`

Ensure that you update your `.env` file with correct database values
```
DB_HOST=mysql
DB_NAME=demo
DB_USER=demo
DB_PASSWORD=secret
```

Generate your security keys with the WP CLI 
```
$ docker-compose run --rm app wp dotenv salts generate --allow-root
```

## Quickstart
Craft your Bedrock Wordpress app with Docker 
```
$ mason craft bedrock
```

Add your Docker files to source control.
```
$ git add .
$ git commit -m "Docker"
```

Spin up your development environment with Docker (add the `-d` flag to the command to run in detached mode)
``` 
$ docker-compose up
```

That's all! You're now running your Bedrock Wordpress application with Docker!

You'll be able to access your application at http://<docker-ip>, where <docker-ip> is the boot2docker ip or localhost if you are running Docker natively.

## Deployment
Deploying is just as easy with [Codemason](http://mason.ci). For more detailed instructions, see our [documentation](http://mason.ci/docs/quickstart#deploy-dreams).

Create an application on Codemason for your app
```
$ mason create --application bedrock-app
```

Add updated build script to source control
```
$ git add .
$ git commit -m "Build script"
```

Push your code to your Codemason Git remote to build it into a Docker image
```
$ git push codemason master 
```

Deploy
```
$ mason deploy --to bedrock-app
```

