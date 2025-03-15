import styled from '@emotion/styled';

type TextContentProps = {
  mainLine: string;
  textLines: string[];
};

const TextLinesDisplay = ({ mainLine, textLines }: TextContentProps) => {
  const TextWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 40px 0px;
    @media (max-width: 768px) {
      flex-direction: column;
      padding: 10px 0px;
    }
  `;

  const LinesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: start;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0px 20px;
      align-items: end;
    }
  `;

  const MainTextContent = styled.div`
    width: 50%;
    font-size: 24px;
    font-weight: bold;
    text-align: end;
    color: #333;
    line-height: 1.6;
    text-decoration: none;
    letter-spacing: 0.1em;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 16px;
      text-align: left;
    }
  `;

  const TextContent = styled.div`
    font-size: 12px;
    text-align: left;
    color: #333;
    line-height: 1.6;
    padding: 0 20px;
    text-decoration: none;
    letter-spacing: 0.1em;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 12px;
    }
  `;

  return (
    <TextWrapper>
      <MainTextContent>{mainLine}</MainTextContent>
      <LinesWrapper>
        {textLines?.map((line, index) => {
          return <TextContent key={index}>{line}</TextContent>;
        })}
      </LinesWrapper>
    </TextWrapper>
  );
};

export default TextLinesDisplay;
