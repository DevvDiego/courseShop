import { error } from '@sveltejs/kit';
import { courses } from '../courses.js';

export function load({ params }) {
	const course = courses.find((course) => course.url === params.slug);

	if (!course) error(404);

	return {
		course
	};
}