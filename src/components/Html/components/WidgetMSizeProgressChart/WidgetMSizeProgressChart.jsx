/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';

const WidgetMSizeProgressC = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 2.767256498336792px 2.2138051986694336px rgba(108, 73, 172, 0.02), 0px 6.650102138519287px 5.32008171081543px rgba(108, 73, 172, 0.03), 0px 12.521552085876465px 10.017241477966309px rgba(108, 73, 172, 0.04), 0px 22.3363094329834px 17.869047164916992px rgba(108, 73, 172, 0.04), 0px 41.777610778808594px 33.422088623046875px rgba(108, 73, 172, 0.05), 0px 100px 80px rgba(108, 73, 172, 0.07)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `20px 30px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
  width: `290px`,
}));

const Info = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `230px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Title = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `211px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Name = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 56, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `300`,
  fontSize: `16px`,
  letterSpacing: `0.4399999976158142px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  width: `129px`,
  margin: `0px`,
}));

const Value = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `2px 0px 0px 0px`,
  overflow: `hidden`,
});

const Amount = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 56, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `34px`,
  letterSpacing: `-0.4399999976158142px`,
  textDecoration: `none`,
  lineHeight: `44px`,
  textTransform: `none`,
  margin: `0px`,
}));

const Indicator = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `26px`,
  margin: `0px 0px 0px 6px`,
  overflow: `hidden`,
});

const Percent = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 185, 41, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0.4399999976158142px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  width: `37px`,
  height: `26px`,
  margin: `0px`,
}));

const Detail = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 56, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  opacity: `0.6000000238418579`,
  width: `224px`,
  margin: `2px 0px 0px 0px`,
}));

const Table = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `20px 0px 0px 0px`,
  overflow: `hidden`,
});

const Row = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
});

const Row1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `12px`,
  width: `228.06px`,
  margin: `0px`,
});

const Name1 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 56, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `139px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Value1 = styled('div')(({ theme }) => ({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 56, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `74px`,
  position: `absolute`,
  left: `154px`,
  top: `0px`,
}));

const Row2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `6px`,
  width: `230px`,
  margin: `2px 0px 0px 0px`,
});

const Background = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(219, 223, 241, 1)`,
  borderRadius: `6.5px`,
  width: `230px`,
  height: `4px`,
  position: `absolute`,
  left: `0px`,
  top: `1px`,
}));

const Fill = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(134, 118, 255, 1)`,
  borderRadius: `6.5px`,
  width: `132px`,
  height: `6px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Row3 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `19px 0px 0px 0px`,
  overflow: `hidden`,
});

const Row4 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `12px`,
  width: `228.06px`,
  margin: `0px`,
});

const Name2 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 56, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `139px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Value2 = styled('div')(({ theme }) => ({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 56, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `74px`,
  position: `absolute`,
  left: `154px`,
  top: `0px`,
}));

const Row5 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `6px`,
  width: `230px`,
  margin: `2px 0px 0px 0px`,
});

const Background1 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(219, 223, 241, 1)`,
  borderRadius: `6.5px`,
  width: `230px`,
  height: `4px`,
  position: `absolute`,
  left: `0px`,
  top: `1px`,
}));

const Fill1 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 112, 139, 1)`,
  borderRadius: `6.5px`,
  width: `132px`,
  height: `6px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Row6 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `19px 0px 0px 0px`,
  overflow: `hidden`,
});

const Row7 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `12px`,
  width: `228.06px`,
  margin: `0px`,
});

const Name3 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 56, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `139px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

const Value3 = styled('div')(({ theme }) => ({
  textAlign: `right`,
  whiteSpace: `pre-wrap`,
  color: `rgba(56, 56, 116, 1)`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `12px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `12px`,
  textTransform: `none`,
  width: `74px`,
  position: `absolute`,
  left: `154px`,
  top: `0px`,
}));

const Row8 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `6px`,
  width: `230px`,
  margin: `2px 0px 0px 0px`,
});

const Background2 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(219, 223, 241, 1)`,
  borderRadius: `6.5px`,
  width: `230px`,
  height: `4px`,
  position: `absolute`,
  left: `0px`,
  top: `1px`,
}));

const Fill2 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 186, 105, 1)`,
  borderRadius: `6.5px`,
  width: `132px`,
  height: `6px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
}));

function WidgetMSizeProgressChart(props) {
  return (
    <WidgetMSizeProgressC>
      <Info>
        <Title>
          <Name>{`Total earning`}</Name>
        </Title>
        <Value>
          <Amount>{`$12,875`}</Amount>
          <Indicator>
            <Percent>{`10%`}</Percent>
          </Indicator>
        </Value>
        <Detail>{`Compared to $21,490 last year`}</Detail>
      </Info>
      <Table>
        <Row>
          <Row1>
            <Name1>{`January `}</Name1>
            <Value1>{`613`}</Value1>
          </Row1>
          <Row2>
            <Background></Background>
            <Fill></Fill>
          </Row2>
        </Row>
        <Row3>
          <Row4>
            <Name2>{`February `}</Name2>
            <Value2>{`613`}</Value2>
          </Row4>
          <Row5>
            <Background1></Background1>
            <Fill1></Fill1>
          </Row5>
        </Row3>
        <Row6>
          <Row7>
            <Name3>{`March `}</Name3>
            <Value3>{`613`}</Value3>
          </Row7>
          <Row8>
            <Background2></Background2>
            <Fill2></Fill2>
          </Row8>
        </Row6>
      </Table>
    </WidgetMSizeProgressC>
  );
}

export default WidgetMSizeProgressChart;
