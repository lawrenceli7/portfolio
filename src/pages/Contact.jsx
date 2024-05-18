import { Button, Form, Input, Typography } from 'antd';

const { Title } = Typography;

function Contact() {

  const [form] = Form.useForm();

  const clearMessage = () => {
    form.resetFields();
  };

  return (
    <div className="flex flex-col mx-auto h-screen justify-center" id="contact">
      <div className="flex justify-center items-center ">
        <Form
          form={form}
          action="https://getform.io/f/negAvlbw"
          method="POST"
          layout="vertical"
          className="flex flex-col w-full md:w-8/12 p-4 bg-white dark:bg-[#16181d] rounded-xl shadow-lg border border-teal-100 dark:border-purple-100"
        >
          <Title level={1} className="text-center mb-4 text-white">
            <span className="text-4xl font-bold bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 bg-clip-text text-transparent hover:underline hover:underline-offset-8 dark:text-white">
              Contact Me
            </span>
          </Title>
          <Form.Item
            name="name"
            label={<span className="text-gray-800 dark:text-white">Full Name</span>}
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input placeholder="Full Name:" className="dark:bg-[#23272f] dark:placeholder-white dark:text-white" />
          </Form.Item>
          <Form.Item
            name="email"
            label={<span className="text-gray-800 dark:text-white">Email Address</span>}
            rules={[{ required: true, message: 'Please enter your email address' }]}
          >
            <Input type="email" placeholder="Email Address:" className="dark:bg-[#23272f] dark:placeholder-white dark:text-white" />
          </Form.Item>
          <Form.Item
            name="subject"
            label={<span className="text-gray-800 dark:text-white">Subject</span>}
            rules={[{ required: true, message: 'Please enter a subject' }]}
          >
            <Input placeholder="Subject:" className="dark:bg-[#23272f] dark:placeholder-white dark:text-white" />
          </Form.Item>
          <Form.Item
            name="message"
            label={<span className="text-gray-800 dark:text-white">Message</span>}
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <Input.TextArea rows={6} placeholder="Enter your message:" className="dark:bg-[#23272f] dark:placeholder-white dark:text-white" />
          </Form.Item>
          <Form.Item>
            <Button type="submit" htmlType="submit" className="w-full mb-2 bg-teal-400 border-none text-white">
              Send Message
            </Button>
            <Button type="default" onClick={clearMessage} className="w-full bg-purple-400 border-none text-white">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Contact;
