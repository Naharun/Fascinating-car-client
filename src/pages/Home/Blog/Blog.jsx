
const Blog = () => {
    return (
        <div className="space-y-7 p-12">
            <h2 className="text-4xl font-bold text-lime-900 text-center">Blog !!</h2>
            <div className=" shadow-xl shadow-lime-900 bg-violet-300 p-8">
                <h3 className="text-xl font-bold">Q.1 : What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h3>
                <p className="text-xl">
                    <span className="font-bold text-lime-900 text-xl">Answer:</span><br /> <span className="font-bold">Access token:</span> When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.
                    <br />
                    <span className="font-bold">Refresh token:</span> As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.
                    <br />
                    <span className="font-bold">This is how they work :</span>
                    Normally, a user with an access token can only access protected resources or perform specific actions for a set period of time, which reduces the risk of the token being compromised. A refresh token allows the user to get a new access token without needing to log in again.
                    <br />
                    <span className="font-bold">We have many option to store them :</span>
                    1. Store it in local browser storage.<br />
                    2.Store it in a cookie in client side, it can be safer than local browser storage.<br />
                    3.Do not store the token but store username and password in the browser or client-side cookie, and then retrieve a new token by sending credentials silently.
                </p>
            </div>
            <div className="shadow-xl shadow-lime-900 bg-violet-300 p-8">
                <h3 className="text-xl font-bold">Compare SQL and NoSQL databases?</h3>
                <br />
                <p className="font-bold text-lime-900 text-xl">Answer :</p>
                <br />
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-xl font-bold">
                                <th>Number</th>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover">
                                <th>1</th>
                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                <td>Non-relational or distributed database system.</td>
                            </tr>
                            <tr className="hover">
                                <th>2</th>
                                <td>These databases have fixed or static or predefined schema</td>
                                <td>They have a dynamic schema</td>
                            </tr>
                            <tr className="hover">
                                <th>3</th>
                                <td>These databases are not suited for hierarchical data storage.</td>
                                <td>These databases are best suited for hierarchical data storage.</td>
                            </tr>
                            <tr className="hover">
                                <th>4</th>
                                <td>These databases are best suited for complex queries</td>
                                <td>These databases are not so good for complex queries</td>
                            </tr>
                            <tr className="hover">
                                <th>5</th>
                                <td>Vertically Scalable</td>
                                <td>Horizontally scalable</td>
                            </tr>
                            <tr className="hover">
                                <th>6</th>
                                <td>Follows ACID property</td>
                                <td>Follows CAP(consistency, availability, partition tolerance)</td>
                            </tr>
                            <tr className="hover">
                                <th>7</th>
                                <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</td>
                                <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <div className="shadow-xl shadow-lime-900 bg-violet-300 p-8">
                <h3 className="text-xl font-bold">What is express js? What is Nest JS?</h3>
                <p className="text-xl">
                    <span className="font-bold text-lime-900 text-xl">Answer</span> <br />
                    <span className="font-bold">Express.js</span> <br />
                    Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                    <br />
                    Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks. <br />
                    <span className="font-bold">Nest JS</span> <br />
                    NestJS is a popular open-source, back-end framework for Node.js and TypeScript-based, server-side applications. It is intended to provide a solid foundation for developing server-side applications by leveraging well-known patterns and the best practices from other frameworks such as Angular, Express.js, and others.
                </p>
            </div>
            <div className="shadow-xl shadow-lime-900 bg-violet-300 p-8">
                <h3 className="text-xl font-bold">What is MongoDB aggregate and how does it work?</h3>
                <p className="text-xl">
                    <span className="font-bold">MongoDB Aggregation</span> <br />
                    MongoDB Aggregation uses an aggregate() method to perform the aggregation operations. Basically, this aggregation operation practices data records and provides calculated results. The aggregation operations assemble values from various documents together and are able to execute a range of operations, such as average, sum, maximum, minimum, etc., on the assembled data to provide only a result. A corresponding of MongoDB Aggregation in SQL is count(*) and with the group by. MongoDB Aggregation is identical to the aggregate function provided in SQL. <br />
                    <span className="font-bold">Aggregation work in MongoDB</span> <br />
                    There is no better method than MongoDB Aggregations when we need to collect the metrics from MongoDB for any graphical illustration or maybe other operations. Aggregation in MongoDB is responsible for processing the data, which results in the calculated outputs, generally by assembling the data from several documents and then executes in various ways on those assembled data in order to yield one collective result. It practices documents and then yield computed outputs and thus execute a range of operations on the assembled data to return only one result.
                </p>
            </div>
        </div>
    );
};

export default Blog;