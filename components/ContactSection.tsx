import React from 'react'
import styled from 'styled-components'
import { FiTwitter, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const ContactSection = () => {
  return (
    <Section id="contact">
      <div className="container">
        <Title>Reach Out To Me !!!</Title>
        <p className="subTitle">Go ahead... Don&apos;t be shy</p>
        <SocialIcons>
          <div className="iconBox">
            <FiTwitter className="twitter icon" />
          </div>
          <div className="iconBox">
            <FiLinkedin className="linkedin icon" />
          </div>
          <div className="iconBox">
            <FiPhone className="youtube icon" />
          </div>
          <div className="iconBox">
            <FiMail className="github icon" />
          </div>
        </SocialIcons>

        <FormWrapper>
          <h2 className="title">Let&apos;s Chat</h2>
          <div className="quote">
            <p>&quot;Alone we can do so little <br/> together we can do so much.&quot; <small> – Helen Keller</small></p>
          </div>

          <form>
            <div className="formControl">
              <label htmlFor="name">Name*</label>
              <input type="text" placeholder='Name' />
            </div>
            <div className="formControl">
              <label htmlFor="email">Email*</label>
              <input type="email" placeholder='Email Address' />
            </div>
            <div className="formControl">
              <label htmlFor="message">Message*</label>
              <textarea name="message" id="message" placeholder="Type Here !!!"></textarea>
            </div>
            <div className="formControl">
              <button>Send Message</button>
            </div>
          </form>
        </FormWrapper>
      </div>
    </Section>
  )
}

const Section = styled.section`
  box-shadow: rgba(0, 0, 0, 0.15) 14px 14px 40px 0px;
  height: 100%;
  background: ${({ theme }) => theme.brand};
  
  .container {
    padding: 6rem 0;

    @media screen and (max-width: 479px) {
      padding: 4rem 0;
    }
  }

  .subTitle {
    text-align: center;
    color: ${({ theme }) => theme.text};
    font-size: 1.1rem;
    font-weight: 500;
  }
`
const Title = styled.h3`
  text-align: center;
  font-size: 2.5vw;
  font-weight: 800;
  margin-bottom: 4rem;

  @media screen and (max-width: 991px) {
    font-size: 4.5vw;
  }
  @media screen and (max-width: 479px) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`
const SocialIcons = styled.div`
  width: 30%;
  margin: 5rem auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 991px) {
    width: 60%;
  }
  @media screen and (max-width: 479px) {
    width: 80%;
    margin: 3rem auto;
  }

  .iconBox {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.text};
    transition: all 0.6s linear;

    &:hover {
      background: ${({ theme }) => theme.white};
      border: solid 2px ${({ theme }) => theme.text};
      
      .icon {
        color: ${({ theme }) => theme.text};
      }
    }
  }

  .icon {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.brand}
  }
  

  @media screen and (max-width: 479px) {
    .iconBox {
      width: 40px;
      height: 40px;
    }

    .icon {
      font-size: 1rem;
    }
  }
`

const FormWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  border: solid 1rem ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.text};
  padding: 2rem;
  text-align: center;
  @media screen and (max-width: 991px) {
    width: 80%;
  }
  @media screen and (max-width: 479px) {
    width: 95%;
    padding: 1rem;
  }
 
  
  .title {
    text-align: center;
    color: ${({ theme }) => theme.white};
    font-size: 2rem;
    font-weight: 900;
  }

  .quote {
    text-align: center;
    
    p {
      color: ${({ theme }) => theme.white};
      font-size: 1.1rem;
      
      small {
        color: ${({ theme }) => theme.gray};
        margin-left: 5px;
      }
    }
  }

  form {
    width: 55%;
    margin: 4rem auto 2rem auto;

    @media screen and (max-width: 991px) {
      width: 80%;
    }

    @media screen and (max-width: 479px) {
      width: 95%;
    }
  }

  .formControl {
    width: 100%;
    text-align: left;
    margin-top: 1rem;

    label {
      color: ${({ theme }) => theme.white};
      font-size: 0.9rem;
    }
    
    input {
      padding: 10px;
      width: 100%;
      margin-top: 5px;
      color: ${({ theme }) => theme.text};
      font-size: 1rem;
    }
    textarea {
      width: 100%;
      padding: 0.5rem;
      height: 90px;
      margin-top: 5px;
      font-size: 1rem;
    }

    button {
      background: ${({ theme }) => theme.brand};
      color: ${({ theme }) => theme.text};
      font-weight: 800;
      font-size: 1.1rem;
      padding: 15px;
      width: 100%;
      margin: 1rem auto;
      border: none;
    }

    @media screen and (max-width: 479px) {
      input {
        padding: 8px;
        font-size:0.8rem;
        margin: 0;
      }
      textarea {
        font-size: 0.9rem;
        margin: 0;
      }

      button {
        font-size: 1rem;
        padding: 10px;
        width: 100%;
        margin: 0rem auto;
      }
    }
  }
`;

export default ContactSection
