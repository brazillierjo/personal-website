import { Link } from "react-scroll";

interface ReactScrollLinkProps {
    to: string;
    label: string;
    spy?: boolean;
    smooth?: boolean;
    duration?: number;
}

/**
 * Renders a React scroll link component to scroll page on click.
 *
 * @param {ReactScrollLinkProps} props - The props object containing the properties of the link.
 * @param {string} props.to - The target element ID to scroll to.
 * @param {string} props.label - The label to display for the link.
 * @param {boolean} [props.spy=true] - Whether or not to enable scroll spy.
 * @param {boolean} [props.smooth=true] - Whether or not to enable smooth scrolling.
 * @param {number} [props.duration=400] - The duration of the scroll animation in milliseconds.
 * @returns {JSX.Element} The rendered React scroll link component.
 */
function ReactScrollLink({ to, label, spy = true, smooth = true, duration = 400 }: ReactScrollLinkProps) {
    return (
        <Link to={to} spy={spy} smooth={smooth} duration={duration} className='cursor-pointer'>
            {label}
        </Link>
    );
}

export default ReactScrollLink;
