import { courses } from './courses.js';

export function load() {
	return {
		courses: courses.map((course) => ({
			name: course.name,
			summary: course.summary,
			startHour: course.startHour,			
			url: course.url,
			coverPhoto: course.coverPhoto,
			

		}))
	};
}
