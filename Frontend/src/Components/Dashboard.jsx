import React from 'react'
import { Container, Row, Col, Card, Table, Form, Button } from 'react-bootstrap';

export default function Dashboard() {
  return (
    <>
      <Container fluid>
      <Row>
        {/* Sidebar Component (Navigation) */}
        <Col md={3} lg={2} className="bg-light min-vh-100 p-3">
          <div className="sticky-top">
            <h5>Job Portal Admin</h5>
            <nav className="nav flex-column">
              <a className="nav-link active" href="/dashboard">Dashboard</a>
              <a className="nav-link" href="/find-jobs">Job Listings</a>
              <a className="nav-link" href="#">Applicants</a>
              <a className="nav-link" href="#">Settings</a>
            </nav>
          </div>
        </Col>

        {/* Main Content Area */}
        <Col md={9} lg={10} className="p-4">
          <header className="mb-4">
            <h1>Welcome to the Dashboard</h1>
          </header>
          
          <Row>
            {/* Example Dashboard Cards (Analytics/KPIs) */}
            <Col md={4}>
              <Card bg="primary" text="white" className="mb-4">
                <Card.Body>
                  <Card.Title>Total Jobs Posted</Card.Title>
                  <Card.Text>1500</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="success" text="white" className="mb-4">
                <Card.Body>
                  <Card.Title>Total Applicants</Card.Title>
                  <Card.Text>5000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card bg="info" text="white" className="mb-4">
                <Card.Body>
                  <Card.Title>Pending Reviews</Card.Title>
                  <Card.Text>250</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Job Listings Table */}
          <Card className="shadow-sm mb-4">
            <Card.Header>Recent Job Listings</Card.Header>
            <Card.Body>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Job Title</th>
                    <th>Company</th>
                    <th>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dynamically generate rows from data */}
                  <tr>
                    <td>1</td>
                    <td>Software Engineer</td>
                    <td>Google</td>
                    <td>Remote</td>
                    <td><span className="text-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>UX Designer</td>
                    <td>Facebook</td>
                    <td>New York</td>
                    <td><span className="text-warning">Pending</span></td>
                  </tr>
                </tbody>
              </Table>
              <Button variant="primary">View All Listings</Button>
            </Card.Body>
          </Card>

          {/* Add a form for posting a new job */}
          <Card className="shadow-sm">
            <Card.Header>Post a New Job</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="jobTitle">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter job title" />
                </Form.Group>
                {/* Add more form fields here */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </Container>
    </>
  )
}
