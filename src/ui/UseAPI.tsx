/**
 * Copyright (C) 2025 Itihaas | Sunil Shastry
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version
 *
 * To view full licensing and usage information, visit: https://github.com/sunillshastry/itihaas-api/blob/master/LICENSE
 */

import { BookCheck, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * A React component implementing the user interface and content for the *use-api* section within the home page
 *
 * @returns React JSX for the component level implementation
 */
function UseAPI() {
	return (
		<div className="bg-primary-400 mt-10 rounded-xs p-6">
			<h2 className="border-primary-30/25 text-primary-80 font-heading border-b text-xl first-letter:text-3xl">
				Are you a developer?
			</h2>
			<div>
				<p className="text-primary-70 mt-3 leading-10">
					Are you passionate about history or building educational tools?
					Itihaas offers a robust, read-only public API that gives you access to
					a rich dataset covering Indian dynasties, rulers, battles, timelines,
					and more. Whether you are working on a personal project, building a
					commercial application, or conducting academic research, our API makes
					it easy to integrate authentic historical data into your platform.
					With comprehensive filtering, sorting, and search capabilities, you
					can tailor the data to suit your needs. Best of all, Itihaas is free
					and safe to use with API key access and rate-limiting for added
					security and usage tracking. Start building today and bring the story
					of India&apos;s past to life in your apps, websites, and tools.
				</p>

				<div className="mt-4 flex items-center gap-2 text-sm font-medium">
					<Link
						to="/docs"
						className="from-primary-30 to-primary-20 text-primary-700 hover:from-primary-40 hover:to-primary-40 inline-flex items-center justify-start gap-1 rounded-sm bg-linear-to-br px-3 py-2 shadow transition-all duration-150 ease-in"
					>
						<span>View Docs</span>
						<span>
							<BookCheck size={16} />
						</span>
					</Link>

					<Link
						to="/register"
						className="from-primary-60 to-primary-50 text-primary-100 hover:from-primary-70 hover:to-primary-70 inline-flex items-center justify-start gap-1 rounded-sm bg-linear-to-br px-3 py-2 shadow transition-all duration-150 ease-in"
					>
						<span>Get API Key</span>
						<span>
							<KeyRound size={16} />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default UseAPI;
