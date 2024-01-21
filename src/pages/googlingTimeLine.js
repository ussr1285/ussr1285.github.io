import React, { useEffect,useState } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { NotionRenderer } from "react-notion"
import axios from 'axios'

const GooglingTimeLine = () => {
    const [response, setResponse] = useState({})

    useEffect(() => { // notion imbeding code by https://velog.io/@leehaeun0/22.02.18-TIL-ReactNotion%EC%9C%BC%EB%A1%9C-%EB%85%B8%EC%85%98-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%97%90-%EC%9E%84%EB%B2%A0%EB%93%9C%ED%95%98%EA%B8%B0
        const NOTION_PAGE_ID = 'fb5067a26b514e6580519523e319a5f6?pvs=4'
        axios
            .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
            .then(({ data }) => {
                setResponse(data)
            })
    }, [])

    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 1rem",
        },
    }
    
    const makeNotionImbed = () => {
        return (
            Object.keys(response).length && (
                // NotionRenderer 컴포넌트를 사용하여 렌더링을 하는데, 너무 길이가 길으니까 페이지 별로 나눠서 렌더링을 할 수 있도록 해줘. 
                <NotionRenderer blockMap={response}/>
            )
        )
    }
    
    return (
        <Layout pageTitle="구글링 타임라인">
            <div style={styles.container}>
                {makeNotionImbed()}
            </div>
        </Layout>
    )
}

export const Head = () => <Seo title="googlingtimeline" />

export default GooglingTimeLine
