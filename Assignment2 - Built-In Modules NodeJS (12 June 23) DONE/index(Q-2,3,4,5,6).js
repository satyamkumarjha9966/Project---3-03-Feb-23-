const fs = require('fs');

const architectureInfo = `
Node.js is built on the V8 JavaScript engine, which is an open-source JavaScript engine developed by Google. It allows JavaScript code to be executed on the server-side, providing a powerful and scalable platform for building server-side applications. Node.js follows a single-threaded event-driven architecture, which means it uses a single thread to handle multiple concurrent requests asynchronously. This non-blocking I/O model allows Node.js to efficiently handle a large number of concurrent connections without consuming excessive system resources. Node.js has a module-based architecture, where reusable code modules are used to implement various functionalities. The Node.js module system allows developers to easily create, reuse, and share modules, making it a popular choice for building modular and scalable applications. Node.js provides a rich set of built-in modules and also allows developers to create custom modules. These modules can be used to perform tasks such as file system operations, networking, database access, and more.
`;

const nodejsAdvantage = `
Node.js brings several advantages to web development. Firstly, it uses a single-threaded, event-driven architecture, making it highly scalable and capable of handling a large number of concurrent requests without blocking. This allows developers to build high-performance applications that can handle real-time communication and heavy I/O workloads efficiently. Secondly, Node.js leverages JavaScript, a ubiquitous programming language, both on the client and server sides. This enables full-stack JavaScript development, allowing developers to use the same language and share code between the front-end and back-end, reducing development time and effort. Additionally, Node.js benefits from a vast ecosystem of open-source libraries and modules available through the Node Package Manager (npm), enabling developers to leverage existing solutions and accelerate development. Moreover, Node.js is well-suited for microservices architectures, as it facilitates the development and deployment of small, independent services that can communicate with each other through lightweight APIs. Lastly, Node.js excels in handling real-time applications, such as chat platforms and streaming services, thanks to its event-driven nature and support for WebSockets. Overall, Node.js provides a powerful and efficient platform for building scalable, fast, and real-time web applications, making it a popular choice for developers and organizations alike.`;

// Q2  ******************************************************************

fs.writeFile('nodejs_architecture.txt', architectureInfo, (err) => {
    if (err) {
        console.log('Error is: ', err);
    } else {
        console.log('Architecture information written to nodejs_architecture.txt SuccessFully');
    }
})

// Q3  ******************************************************************

fs.readFile('nodejs_architecture.txt', (err, data) => {
    if (err) {
        console.log('Some Error Come To Read Data and that are', err);
    } else {
        console.log('SuccessFully Reading Completed and Data is: ', data.toString());
    }
})

// Q4  ******************************************************************

fs.appendFile('nodejs_architecture.txt', nodejsAdvantage, (err) => {
    if (err) {
        console.log('Some Error is Occured: ', err);
    } else {
        console.log("Data Successfully Append in the File nodejs_architecture.txt");
    }
})

// Q5  ******************************************************************

fs.unlink('nodejs_architecture.txt', (err) => {
    if (err) {
        console.log('There is some Error to delete the File nodejs_architecture.txt and those are: ', err);
    } else {
        console.log('nodejs_architecture.txt File Deletion SuccessFully Completed');
    }
})

// Q6  ******************************************************************

const os = require('os');

console.log('Operating system name: ', os.type());

console.log('OS release: ', os.release());