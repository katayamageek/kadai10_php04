const API_KEY = 'xxxxxxxxxxxx';
const URL = "https://api.openai.com/v1/chat/completions";

function reply() {
    var propername = document.getElementById("propername").value;
    var generalname = document.getElementById("generalname").value;
    var salespoint1 = document.getElementById("salespoint1").value;
    var salespoint2 = document.getElementById("salespoint2").value;
    var salespoint3 = document.getElementById("salespoint3").value;
    async function getResponse() {
        try {
            const response = await axios.post(
                URL,
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        { "role": "user", "content": propername + "という名称の" + generalname + "を宣伝するための店内放送の原稿を作成してください。なおセールスポイントとして「" + salespoint1 + "」「" + salespoint2 + "」「" + salespoint3 + "」の点を含めてください。"}
                    ]
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${API_KEY}`,
                    },
                }
            );
            var chatgpt_response = response.data.choices[0].message.content;
            $("#response_text").val(chatgpt_response);
        } catch (error) {
            console.log(error);
        }
    }
    getResponse();
    //ボタンを押したらボタンの表示を変える 
    $("#change").val("Loading...");
}
