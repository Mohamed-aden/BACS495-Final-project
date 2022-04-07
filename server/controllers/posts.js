import postMessage from "../models/postMessage.js";





export  const getPosts = async (req, res) => {
    try {
        const postMessages = await postMessage.find();

        res.status(200).json(postMessages)


    } catch (error) {
        res.status(404).json({messsage: error.messsage});
    }
}

export  const createPost = (req, res) => {
    res.send("Post creation")
}