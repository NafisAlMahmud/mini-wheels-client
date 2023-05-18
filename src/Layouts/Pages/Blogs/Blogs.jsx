const Blogs = () => {
  return (
    <>
      <div className=" mt-16  mb-10 lg:px-24 sm:px-4 md:px-8">
        <div className="blog-title">
          <h2 className="text-center text-4xl font-semibold">Blogs</h2>
        </div>
        <div className="qna text-left text-2xl">
          <div className="border border-x-yellow-500 mt-2"></div>
          <h3 className="font-bold mt-8">
            1.What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h3>

          <h2>
            {" "}
            <span className="text-md font-bold text-orange-500">Ans: </span>
            Access tokens and refresh tokens are commonly used in authentication
            and authorization systems.
            <br />
            Access Token: An access token is a credential that is used to
            authenticate and authorize access to protected resources. It is
            typically a string of characters that represents the identity and
            permissions of a user or client application. Access tokens are
            usually short-lived and have an expiration time.
            <br />
            Refresh Token: A refresh token is a credential used to obtain a new
            access token without requiring the user to re-authenticate. Refresh
            tokens have a longer expiration time compared to access tokens.
          </h2>
          <h3 className="font-bold mt-8">2.Compare SQL and NoSQL databases?</h3>
          <h2>
            <span className="text-md font-bold text-orange-500">Ans: </span>
            SQL (Structured Query Language) and NoSQL (Not only SQL) are two
            different types of database systems. Here is a comparison between
            SQL and NoSQL databases:
            <br />
            SQL Databases: Structure: SQL databases follow a rigid, predefined
            structure with tables, columns, and relationships defined by a
            schema. Data Model: SQL databases use a relational data model, where
            data is organized into tables with rows and columns.
            <br />
            NoSQL Databases: Flexibility: NoSQL databases offer flexible
            schemas, allowing for dynamic and evolving data structures without
            requiring a predefined schema. Data Model: NoSQL databases use
            various data models, such as key-value, document, columnar, or
            graph, based on the specific requirements of the application.
          </h2>
          <h3 className="font-bold mt-8">
            3. What is express js? What is Nest JS ?
          </h3>
          <h2>
            <span className="text-md font-bold text-orange-500">Ans: </span>
            Express.js: Express.js is a minimalist, flexible, and widely adopted
            web application framework for Node.js. It provides a simple,
            unopinionated approach to building web servers and APIs. Express.js
            focuses on providing a lightweight and modular framework that allows
            developers to define routes, handle HTTP requests, and manage
            middleware.
            <br />
            NestJS: NestJS is a progressive, opinionated, and powerful web
            application framework for Node.js. It is built with a focus on
            scalability, maintainability, and the use of modern TypeScript
            language features. NestJS follows the modular architecture pattern
            and uses decorators, providers, and modules to organize the
            codebase.
          </h2>
          <h3 className="font-bold mt-8">
            4. What is MongoDB aggregate and how does it work?
          </h3>
          <h2>
            <span className="text-md font-bold text-orange-500">Ans: </span>
            In MongoDB, the aggregate function is used to perform advanced data
            processing operations and analysis on the documents within a
            collection. It allows you to perform various transformations,
            filtering, grouping, and computations on the data. The aggregate
            function uses a pipeline approach, where multiple stages are chained
            together to form a sequence of operations.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Blogs;
