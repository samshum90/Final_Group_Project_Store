import React from 'react';
import {
	Container,
	Button,
	Divider,
	Form,
	Grid,
	Segment,
} from 'semantic-ui-react';
import Crest from '../assets/icons/codeclan-crest.png';
import { Link } from 'react-router-dom';

const LogIn = () => {
	return (
		<Container fluid className="main-container">
			<Segment placeholder>
				<Grid columns={2} relaxed="very" stackable>
					<Grid.Column>
						<Form>
							<Form.Input
								icon="user"
								iconPosition="left"
								label="Username"
								placeholder="Username"
							/>
							<Form.Input
								icon="lock"
								iconPosition="left"
								label="Password"
								type="password"
							/>

							<Button content="Login" primary />
						</Form>
					</Grid.Column>

					<Grid.Column verticalAlign="middle">
						<Link to="/sign-up">
							<Button content="Sign up" icon="signup" size="big" />
						</Link>
					</Grid.Column>
				</Grid>

				<Divider vertical>
					<img src={Crest} alt="Code Clan Crest" />
				</Divider>
			</Segment>
		</Container>
	);
};

export default LogIn;
