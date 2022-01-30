const processLater = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("complete")
        }, 300)
    }
)

export {processLater};
