import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (

        <Container className='mt-5' style={{ marginBottom: "150px" }}>
            <h2 className='text-center fw-bold'><span className='text-warning'>Q</span>A</h2>
            <section className='d-flex justify-content-center mt-5'>
                <Accordion defaultActiveKey="0" className='w-50' ref={ref}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Differences between uncontrolled and controlled components</Accordion.Header>
                        <Accordion.Body>
                            <p>
                                In React uncontrolled components are components where the state is managed by the DOM itself, rather than being managed by React
                                Examples of uncontrolled components are HTML elements like <code>input</code>, <code>textarea</code>, and <code>'select'</code> that maintain their own state and update it whenever the user interacts with them.Because it's not managed by React, it is difficult to access and modify the data entered by the user.
                            </p>
                            <p>
                                Controlled components are components where the state is managed by React. The value of the component can be update using <code>setState()</code>.
                                Whenever the user interacts with the component, React updates the state, and then re-renders the component. Examples of controlled components are custom input that is created by React.
                            </p>
                            <p>
                                The main difference between controlled and uncontrolled components is that, the controlled components state is managed by React, while in uncontrolled components states is managed by the DOM.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Validate React props using PropTypes</Accordion.Header>
                        <Accordion.Body>
                            <p>PropTypes is a built-in library in React that allows us to validate the props passed to a component. It's a way to ensure that the data passed to a components is of the expected type and shape, helping us to catch bugs early in the development process.</p>
                            <p>
                                To validate props, called the functional component for example Test1 thats accepts two props 'name' and 'age'
                                for defining expected data type use propsTypes for each props.PropTypes.string and PropTypes.number are examples of some of the built-in data types that can use to validate props. isRequired property is used to indicate that a prop is required, and will throw a warning if the prop is not provided.
                            </p>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Difference between nodejs and express js.</Accordion.Header>
                        <Accordion.Body>
                            <p>Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code on the server-side. </p>

                            <p>Express.js, on the other hand, is a popular web framework built on top of Node.js. Express.js provides a robust set of features and tools for building web applications and APIs, such as middleware, routing, templating engines, and more.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is a custom hook, and how to create a custom hook?</Accordion.Header>
                        <Accordion.Body>
                            <p>In React custom hook is a function that allows you to reuse stateful logic across multiple components.
                                Custom hooks enable Us to extract and share common logic and behavior between different components.
                            </p>
                            <p>
                                custom hook can create by defining a function that uses built in React hooks to manage state or perform other operations. Then return an object with the necessary properties that can be used to bind state or other behavior to the components.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
            <div className='text-center mt-5'>
                <Pdf targetRef={ref} filename="blog.pdf" x={22} y={20}>
                    {({ toPdf }) => (
                        <Button variant='warning' className="fw-semibold py-2" onClick={toPdf}>Generate pdf</Button>
                    )}
                </Pdf>
            </div>
        </Container>
    );
};

export default Blog;