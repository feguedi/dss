import Head from 'next/head'

const Error = ({ statusCode, statusMessage }) => (
    <div>
        <Head>
            <title>{ statusCode }</title>
        </Head>
        <div className="error-page">
            <h1>{ statusCode }</h1>
            <div className="error-message">
                <h2>
                    { statusMessage }
                </h2>
            </div>
        </div>
        <style jsx>
            {`
                body {
                    margin: 0
                }
                .error-page {
                    color:#000;
                    background:#fff;
                    font-family:-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
                    height:100vh;
                    text-align:center;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                }
                h1 {
                    display:inline-block;
                    border-right:1px solid rgba(0, 0, 0,.3);
                    margin:0;
                    margin-right:20px;
                    padding:10px 23px 10px 0;
                    font-size:24px;
                    font-weight:500;
                    vertical-align:top
                }
                .error-message {
                    display:inline-block;
                    text-align:left;
                    line-height:49px;
                    height:49px;
                    vertical-align:middle;
                }
                .error-message h2 {
                    font-size:14px;
                    font-weight:normal;
                    line-height:inherit;
                    margin:0;
                    padding:0;
                }
            `}
        </style>
    </div>
)

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    const statusMessage = JSON.stringify(err)
    return { statusCode, statusMessage }
}

export default Error