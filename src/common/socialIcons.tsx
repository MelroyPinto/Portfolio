import Link from "next/link";
import { socialMedia } from "../utils/nav.constants";

export const socialIcons = (className = '' ) => (
    <div className={className}>
      {socialMedia.map((nav) => {
        return (
          <a className='socialMediaIcons' href={nav.url} target="_blank" key={nav.key} rel="noreferrer">{nav.image}</a>
        );
      })}
    </div>
);