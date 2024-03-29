import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import Imagyoutube from '../../Images/link-image.png';
import { Modal, Button } from "react-bootstrap";
import { getPublicList, UploadImages, getInfluencersProfilebyId } from '../../services/api/api-service';
import { useNavigate } from 'react-router-dom';

const AddPortfolio = ({ pagetitle }) => {
    const [show, setShow] = useState(false); // to maintain modal state
    const navigate = useNavigate(); // for navigating after submission
    const [contentTypelist, setContentType] = useState([]);
    const [imagestatus, setImagestatus] = useState(false);
    const [formData, setFormData] = useState({
        src: '',
        original: '',
        caption: '',
        profileId: '',
        status: '',
        mtUserId: '',
        sourceUrl: '',
    });

    //to handle modal events
    const handleShow = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    function extractVideoId(url) {
        // Regular expressions to match YouTube URL patterns
        const youtubeShortPattern = /youtu\.be\/([\w-]+)/;
        const youtubeLongPattern = /youtube\.com\/.*[?&]v=([^&]+)/;

        // Try to match the URL with the patterns
        const shortMatch = url.match(youtubeShortPattern);
        const longMatch = url.match(youtubeLongPattern);

        // Extract the video ID from the matched pattern
        if (shortMatch) {
            console.log("checking shortMatch", shortMatch)
            return shortMatch[1];
        } else if (longMatch) {
            return longMatch[1];
        }

        // If no match is found, return null
        return null;
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            Swal.fire({
                title: "Looks good?!",
                width: 400,
                padding: "1.5em",
                customClass: {
                    title: 'my-swal-title',
                },
                // imageUrl: e.target.result,
                imageUrl: URL.createObjectURL(file),

                imageWidth: 250,
                imageHeight: 250,
                imageAlt: 'Custom image',
                showCancelButton: true,
                confirmButtonColor: "#3AB439",
                cancelButtonColor: "#d33",
                confirmButtonText: "Upload",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    uploadfile(file).then((data) => {
                        // console.log(data);
                        if (data.status) {
                            setImagestatus(true)
                            setFormData({
                                ...formData,
                                src: data.imageurl,
                                original: data.imageurl,
                            });
                        }
                        else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong please Retry uploading Image",
                            })
                        }
                    });
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if content type is selected
        if (formData.caption.trim() === '') {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Please select a content type.",
            });
            return;
        }

        // Check if sourceUrl is not empty before extracting videoId
        if (formData.caption !== "Image") {
            if (!formData.sourceUrl.trim()) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Source URL is empty. Please provide a valid URL.",
                });
                return;
            }

            // Extract videoId if sourceUrl is provided
            const videoId = extractVideoId(formData.sourceUrl);
            console.log("content inside videoID:", videoId)
            if (!videoId) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Invalid YouTube URL. Please provide a valid YouTube URL.",
                });
                return;
            }



            // Prepare data for submission
            const data = [{
                ...formData,
                sourceUrl: videoId,

            }];
            console.log("content updated:", data)


            // Upload data
            UploadImages(data)
                .then(result => {
                    if (!isEmpty(result)) {
                        Swal.fire({
                            icon: "success",
                            title: "Upload Successfully",
                            text: "Image upload successfully uploaded!",
                        });
                        navigate(-1); // Navigate back
                    }
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Failed to upload image. Please try again later.",
                    });
                });
        }

    };

    const uploadfile = async (file) => {

        if (file) {
            const formDataImage = new FormData()
            formDataImage.append("image", file, "compressed-image.jpg")
            try {
                const response = await fetch("https://marbizimages.yuvmedia.in/upload.php", {
                    method: "POST",
                    body: formDataImage,
                })
                const data = await response.json()
                if (data) {
                    return { imageurl: data.imageUrl, status: true }
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong please Retry uploading Image",
                    })
                    return { imageurl: "not", status: false }
                }
            } catch (error) {
                // Handle any errors
                console.error(error)
                return false
            }
        }
        return false // Return false if there's no file to upload
    }

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            getInfluencersProfilebyId(obj.id)
                .then((result) => {
                    // console.log("loginUser", { mtUserId: obj.id, profileId: result.id })
                    setFormData({ mtUserId: obj.id, profileId: result.id });
                })
                .catch((err) => {
                    console.error("Error fetching profile data:", err);
                });
        }
        getPublicList("Content Type").then((result) => {
            setContentType(result);
        });
    }, [])

    return (
        <>
            <div>
                <h2>{pagetitle}</h2>
                <form noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="packageName" className="form-label text-white">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control dark-bg"
                            name="title"
                            required
                            data-mdb-showcounter="true"
                            maxLength="20"
                            placeholder="Enter title for content"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="caption" className="form-label text-white">
                            Content Type
                        </label>
                        <select
                            className="form-select dark-bg"
                            name="caption"
                            aria-label="Content Type"
                            required
                            value={formData.caption}
                            onChange={handleInputChange}
                        >
                            <option value="">Select content type</option>
                            {contentTypelist.map(item =>
                                <option key={item.value} value={item.value}>{item.label}</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="filepath" className="form-label text-white">
                            Upload {formData.contentType} Image
                        </label>
                        <input
                            type="file"
                            className="form-control dark-bg"
                            name="filepath"
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                        {/* <label htmlFor="filepath" className="form-label text-white">
                            {imagestatus ? <strong style={{ color: 'red' }}>Upload File:{formData.src}</strong> : ""}
                        </label> */}
                        {imagestatus && (
                            <div className='gallery-container d-grid my-3' style={{
                                width: "fit-content",
                            }}>
                                {/* <strong style={{ color: 'red' }}>Upload File: {formData.src}</strong> */}
                                <small className='text-secondary text-center'>Preview</small>
                                <img src={formData.src} alt="Uploaded Img" className='rounded-3 img-fluid' style={{
                                    height: "250px",
                                    width: "250px",
                                }} />
                            </div>
                        )}
                    </div>
                    <div className="mb-3">

                        <label htmlFor="sourceUrl" className="form-label text-white">
                            {formData.caption !== "Image" ? (
                                <span>
                                    Source URL:
                                    <strong className='ms-2'>
                                        User Youtube Video link
                                        <span style={{ cursor: "pointer" }} className='text-danger ms-2' onClick={() => handleShow()}>
                                            Check Demo
                                        </span>
                                    </strong>
                                </span>
                            ) : 'Image Source For reference'}
                        </label>

                        <input
                            type="text"
                            className="form-control dark-bg"
                            name="sourceUrl"
                            placeholder={formData.caption !== "Image" ? 'https://www.youtube.com/watch?v=VIDEO-ID' : 'Image Source'}
                            value={formData.sourceUrl}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn-global px-3">
                        Submit
                    </button>
                </form>
            </div>
            <Modal show={show} onHide={handleClose} centered closeButton size="lg" className="youtube-mobal-box" id="youtube-mobal-box">
                {/* <Modal.Header  /> */}
                <Modal.Body  >
                    <Button variant="danger" className="btn-close px-2" onClick={handleClose}></Button>
                    <div className="ratio ratio-16x9">
                        <img src={Imagyoutube} alt="youtube-url-ref" />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddPortfolio;
