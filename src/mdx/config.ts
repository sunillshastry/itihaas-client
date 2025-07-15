import Blockquote from './Blockquote';
import Code from './Code';
import Content from './Content';
import Heading from './Heading';
import Link from './Link';
import ListItem from './ListItem';
import MainHeader from './MainHeader';
import TitleHeader from './TitleHeader';

const mdxComponents = {
	h1: MainHeader,
	h2: MainHeader,
	h3: MainHeader,
	h4: TitleHeader,
	h5: Heading,
	p: Content,
	li: ListItem,
	code: Code,
	a: Link,
	blockquote: Blockquote,
};

export { mdxComponents };
