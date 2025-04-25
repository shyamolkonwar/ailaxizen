async function testContactAPI() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    subject: "Test Subject",
    message: "This is a test message from the API test script"
  }

  try {
    console.log('Testing contact API...')
    console.log('Sending data:', testData)

    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    })

    // Get the raw response text first
    const responseText = await response.text()
    console.log('Raw response:', responseText)

    // Try to parse as JSON
    let data
    try {
      data = JSON.parse(responseText)
    } catch (e) {
      console.error('Failed to parse response as JSON:', e)
      return
    }

    console.log('Response status:', response.status)
    console.log('Response data:', data)

    if (response.ok) {
      console.log('✅ API test successful!')
    } else {
      console.error('❌ API test failed:', data.error)
    }
  } catch (error) {
    console.error('❌ Error testing API:', error)
  }
}

// Run the test
testContactAPI() 