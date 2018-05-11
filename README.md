# GoogleCloudFileApp

This is an express application that can read, write, erase, and list files.

Endpoints:
    - file/write?filename={1}&content={2}
    - file/read?filename={1}
    - file/erase?filename{1}
    - file/list

Parameters:
    - filename: The name of the file being made.
    - content: What is in the file.

To Run Locally Inside a Docker Container:
```./localDocker.sh```

To Deploy to Google Cloud Platform:
```./deployAppEngine.sh ${PROJECT}```
