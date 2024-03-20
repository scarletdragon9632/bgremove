import React, { useState } from 'react'

const Remover = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [finalUrl, setFinalUrl] = useState(null);
  const [isUpload, setIsUpload] = useState(false);

  const handleFileInputChange = (e) => {
    let image = e.target.files[0]; // it will return only first selected file
    console.log(image);
    setSelectedFile(image);
  };

  const handleFileUpload = async () => {
    setIsUpload(true);
    const formData = new FormData();
    formData.append("image_file", selectedFile);
    formData.append("size", "auto");

    const apiKey = "JfkXnsupQWxq5mCS7YfPu6NL"
    const url = 'https://api.remove.bg/v1.0/removebg'
    // send to the server
    await fetch(url, {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
      },
      body: formData,
    })
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        console.log(blob);
        const url = URL.createObjectURL(blob);
        setFinalUrl(url);
        setIsUpload(false);
      })
      .catch();
    setIsUpload(false);
  };
  return (
    <div className='container mt-5'>
      <fieldset>
        <div className='row pt-2'>
          <div className='col-sm-8 d-flex justify-content-center '>
            <div className='ta1'>
              <img className='bgremover' src="./bg-remover.png" alt="bgremover" />
              <p>Pick Any File <br />You can use only 1 pic at once.</p>
              <ul>
                <li className="li1">PNG</li>
                <li className="li2">JPG</li>
                <li className="li3">JPEG</li>
              </ul>
              <div className='uf'>
                <input
                  type="file"
                  className='uploadBtn'
                  accept='.jpg,.png,.jpeg'
                  multiple
                  onChange={handleFileInputChange}
                />
              </div>
              <div className="source-file d-flex mt-5">
                <div className="img1">
                  <img className='me-2' src="./information.png" alt="information" />
                  Max size 10 MB
                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="img2">
                  <img className='me-2' src="./shield.png" alt="shield" />
                  Your images are secure
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-4 d-flex justify-content-center'>
            <div className="card">
              <div className="cardheader">
                <img src="./diamond.png" alt="diamond" />
                <label>Get Free</label>
              </div>
              <div className="carditem">
                <p>$0.00</p>
                <span>Merge 10 images at once</span>
                <span>Image size upto 10 MB </span>
                <span>Combine multiple images</span>
                <span>Custom Filters</span>
                <span>Lightening fast User Experience</span>
              </div>
              <div className="cardbtn">
                <button type='button'>Register Now</button>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div className="huBtn">
                {!isUpload ? (
                  <button
                    type="button"
                    className="btn btn-primary d-flex flex-direction-column mt-4"
                    onClick={handleFileUpload}>Remove Background</button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleFileUpload}>Processing...</button>
                )}
              </div>
            </div>
            <div className="col-sm-4"></div>
            <div className="row">
              <div className="col-sm-8">
                <div className="download-btn">
                  {finalUrl && (
                    <a href={finalUrl} download="no-back.png">
                      <button
                        type='button'
                        className='btn btn-primary d-flex flex-direction-column mt-4'
                      >Download</button>
                    </a> 
                  )}
                  {finalUrl && (
                    <div className="final_img_area">
                      <img src={finalUrl} alt="final_img" className='final_img' />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>

  )
}

export default Remover
