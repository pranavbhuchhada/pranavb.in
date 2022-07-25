import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import React from 'react'
import SvgIcon from '@/components/svgs'
export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formData: {
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: ''
      },
      submitting: false,
      submitted: false,
      error: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange(e) {
    const formData = { ...this.state.formData }
    formData[e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
      formData
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      submitting: true
    }, this.submitForm)
  }

  submitForm() {
    const data = {
      contactName: this.state.formData.contactName,
      contactEmail: this.state.formData.contactEmail,
      contactSubject: this.state.formData.contactSubject,
      contactMessage: this.state.formData.contactMessage
    }

    window.fetch('https://usebasin.com/f/166f1284eaec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((response) => {
        this.setState({
          submitting: false,
          submitted: true,
          error: null
        })
      })
      .catch((error) => {
        this.setState({
          submitting: false,
          submitted: false,
          error: error
        })
      })
  }
  
  render() {
    return (
      <>
        <PageSeo title={`Contact - ${siteMetadata.title}`} description={siteMetadata.description} />
        <div className="divide-y">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Contact
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              You can use the form to contact me with any queries you have or reach out on social media.
            </p>
          </div>
          <div className="space-y-5 pt-8 container">
            <form id='contactForm' name='contactForm' onSubmit={this.handleSubmit}>
              <div className='w-full'>
                <label htmlFor='contactName'>Name <span className='required'>*</span></label>
                <input type='text' className='w-full text-gray-700 rounded-md' size='35' id='contactName' name='contactName' required value={this.state.formData.contactName} onChange={this.handleChange} />
              </div>
              <div className=''>
                <label htmlFor='contactEmail'>Email <span className='required'>*</span></label>
                <input type='text' className='w-full text-gray-700 rounded-md' size='35' id='contactEmail' name='contactEmail' required value={this.state.formData.contactEmail} onChange={this.handleChange} />
              </div>
              <div className=''>
                <label htmlFor='contactSubject'>Subject</label>
                <input type='text' className='w-full text-gray-700 rounded-md' size='35' id='contactSubject' name='contactSubject' value={this.state.formData.contactSubject} onChange={this.handleChange} />
              </div>
              <div className=''>
                <label htmlFor='contactMessage'>Message <span className='required'>*</span></label>
                <textarea className='w-full text-gray-700 rounded-md' cols='50' rows='7' id='contactMessage' name='contactMessage' required value={this.state.formData.contactMessage} onChange={this.handleChange} />
              </div>
              <div className=''>
                <div className='w-full'>
                  <button id='contactSubmit' className='bg-teal-500 hover:bg-teal-700 py-2 px-8 rounded-full'>Submit</button>
                  {this.state.submitting &&
                    <div id='message-progress' className='flex mt-2 space-x-2'>
                      <SvgIcon id='spinner' kind='spinner' />
                    </div>}
                  {this.state.error &&
                    <div id='message-error' className='flex mt-2 space-x-2'>
                      <SvgIcon id='error' kind='error' /><span>{this.state.error}</span>
                    </div>}
                  {this.state.submitted &&
                    <div id='message-success' className='flex mt-2 space-x-2'>
                      <SvgIcon id='check' kind='check' /><span>Your message was sent, thank you.</span>
                    </div>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}
