import { Link } from "react-router-dom";
import socialLinks from "../../data/socialLinks.json";

/**
 * Renders a list of social links.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.withoutEmail - Whether to exclude the email link.
 * @return {JSX.Element} - The rendered social links.
 */
function SocialLinks({ withoutEmail = false }: { withoutEmail?: boolean }): JSX.Element {
    return (
        <div className='mt-6 space-x-8 text-base lg:mt-4 lg:text-left'>
            {Object.keys(socialLinks).map((key, index) => {
                if (withoutEmail && key === "email") return null;

                const link = socialLinks[key as keyof typeof socialLinks];

                return (
                    <Link key={index} to={link.url} target='_blank' className='border-primary-400 hover:border-b-2'>
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
}

export default SocialLinks;
