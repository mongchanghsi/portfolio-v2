import {
  BlogNavigationBarContainer,
  BlogNavigationBarLink,
  BlogNavigationBarLogo,
  BlogNavigationBarSection,
} from "./style";
import Image from "next/image";
import EricLogo from "@/assets/images/mong-transparent.png";
import Link from "next/link";

const BlogNavigationBar = () => {
  return (
    <BlogNavigationBarContainer>
      <Link href="/">
        <BlogNavigationBarLogo>
          <Image src={EricLogo} alt="eric-logo" fill />
        </BlogNavigationBarLogo>
      </Link>

      <BlogNavigationBarSection>
        <Link href="/">
          <BlogNavigationBarLink>Portfolio</BlogNavigationBarLink>
        </Link>
        <Link href="/blog">
          <BlogNavigationBarLink>Tech Blog</BlogNavigationBarLink>
        </Link>
      </BlogNavigationBarSection>
    </BlogNavigationBarContainer>
  );
};

export default BlogNavigationBar;
