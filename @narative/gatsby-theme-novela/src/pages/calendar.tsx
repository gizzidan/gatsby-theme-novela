import React from "react";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Layout from "@components/Layout";
import Sidebar from "@components/Sidebar";
import styled from "@emotion/styled";
import NavBarBasic from "@components/NavBarBasic";
import { Label } from '@narative/gatsby-theme-novela/src/sections/articles/Articles.List2';
import { ArticlesGradient } from '@narative/gatsby-theme-novela/src/sections/features/Headlines.Scroll.tsx';
import mediaqueries from "@styles/media";

function Calendar({ location }) {

    return (
        <Layout>
             <NavBarBasic />
             <SEO pathname={location.pathname} title="Calendar" />
            <Section>
                
                <MainContainer>  
   
                <div>
                <CalendarLabel>The Hum Calendar</CalendarLabel>
                    <CalendarContainer>
                        <iframe id="main" src="https://calendar.google.com/calendar/b/3/embed?height=618&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dGhlaHVtLmNvX3VyaTIxOHY2OTZmc2JyMTYxNWUydjJuZXJjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dGhlaHVtLmNvXzRtZjludWlsbXJtcXFhZnYwMDl2cmNyOXA4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dGhlaHVtLmNvX251Y3ZycnRsN2EwazlrNm1xamp1NTNza29vQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%2330487E&amp;color=%23DD5511&amp;color=%23A87070&amp;color=%231F753C&amp;title=The%20Hum%20Calendar&amp;showTz=0&amp;showTitle=0" width="1000" height="618" frameborder="0" scrolling="no"></iframe>
                        <iframe id="mobile" src="https://calendar.google.com/calendar/b/3/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=dGhlaHVtLmNvX3VyaTIxOHY2OTZmc2JyMTYxNWUydjJuZXJjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dGhlaHVtLmNvXzRtZjludWlsbXJtcXFhZnYwMDl2cmNyOXA4QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dGhlaHVtLmNvX251Y3ZycnRsN2EwazlrNm1xamp1NTNza29vQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%2330487E&amp;color=%23DD5511&amp;color=%23A87070&amp;color=%231F753C&amp;title=The%20Hum%20Calendar&amp;showTz=0&amp;showTitle=0&amp;showNav=1&amp;showPrint=1&amp;showDate=0&amp;showTabs=0&amp;showCalendars=1&amp;mode=AGENDA" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
                    </CalendarContainer>
                </div>
                <div>
                    
                </div>
                </MainContainer>
            </Section>
            <ArticlesGradient />
        </Layout>    )
}

export default Calendar;

const MainContainer = styled.div`
    margin-top: 150px;
    display: grid;
    grid-template-columns: 1000px 300px;
    grid-gap: 20px;
    height: 65vh;
    ${mediaqueries.desktop`
        grid-template-columns: 1fr;
        margin-top: 90px;
        min-height: 100vh !important;
    `}
    ${mediaqueries.phablet`
        grid-template-columns: 1fr;
        margin-top: 90px;
        min-height: 100vh !important;
    `}
` 
const CalendarLabel = styled.h1`
    font-family: "Noe Text";
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;
`

const CalendarContainer = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    width: 100%;
    iframe, object, embed {
        z-index: 200;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100% !important;
    }
    #mobile {
        display: none;
    }
    ${mediaqueries.phablet`
        height: 65vh !important;
        #main {
            display: none;
        }
        #mobile {
            display: flex;
        }
    `}
    
`