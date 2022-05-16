import axios from 'axios';

export default ({ filter }, { services, exceptions }) => {

	const { ServiceUnavailableException, ForbiddenException } = exceptions;

	filter('items.create', async (input, { collection }, { schema }) => {
		if (collection !== 'Release') return input;

		try {

			const headers = {
				'Authorization': 'token XXX'
			}

			const data = {
				'ref': 'main'
			}

			await axios.post('https://api.github.com/repos/OWNER/REPO/actions/workflows/nextjs.yml/dispatches', data, {headers: headers});

		} catch (error) {
			throw new ServiceUnavailableException(error);
		}

		input.githubSynced = true;

		return input;
	});
};