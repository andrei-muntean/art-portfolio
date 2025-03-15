import styled from '@emotion/styled';
const TextContent = () => {
  const TextWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: right;
  `;

  const TextContent = styled.div`
    width: 50%;
    font-size: 12px;
    text-align: left;
    color: #333;
    line-height: 1.6;
    padding: 0 20px;
    text-decoration: none;
    letter-spacing: 0.1em;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 16px;
      text-align: center;
    }
  `;

  return (
    <TextWrapper>
      <TextContent>
        <p>Welcome to the portfolio of an amazing artist.</p>
        <p>
          Explore different categories of artwork, such as paintings,
          photography, and more.
        </p>
        <p>Each piece reflects unique artistic vision and creativity.</p>
      </TextContent>
    </TextWrapper>
  );
};

export default TextContent;
