import styled from '@emotion/styled';

const Footer = () => {
  const Footer = styled.footer`
    width: 100%;
    padding: 20px 0px;
    color: #020202;
    overflow: hidden;
    background-color: #f2f2f2;
    font-size: 12px;
    text-align: right;
    display: flex;
    justify-content: space-between;
  `;

  const LinkContainer = styled.div`
    display: flex;
    gap: 40px;
    padding: 0px 20px;
  `;

  const Link = styled.div`
    text-decoration: none;
    font-size: 12px;
    color: black;
    letter-spacing: 0.1em;
    position: relative;
    cursor: pointer;
    &:hover {
      color: #666;
    }
  `;

  const Copywrite = styled.div`
    padding: 0px 20px;
    cursor: default;
  `;

  return (
    <Footer>
      <LinkContainer>
        <Link>About</Link>
        <Link>Social</Link>
        <Link>Contact</Link>
      </LinkContainer>
      <Copywrite>© 2025 Art Portfolio</Copywrite>
    </Footer>
  );
};

export default Footer;
