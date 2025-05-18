import { Router } from 'express';
import { RouterHandler } from '../../types/express';

const router = Router();

/**
 * @route GET /api/webhooks
 * @desc Get webhooks for a company
 * @access Private/Admin
 */
const getWebhooks: RouterHandler = async (req, res) => {
  try {
    // Mock implementation for now
    const mockWebhooks = [
      {
        id: 'webhook1',
        companyId: 'company1',
        name: 'Lead Integration',
        url: 'https://example.com/webhook/leads',
        secret: 'your_webhook_secret_here',
        events: ['new_message', 'message_status'],
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'webhook2',
        companyId: 'company1',
        name: 'CRM Integration',
        url: 'https://example.com/webhook/crm',
        secret: 'another_webhook_secret',
        events: ['new_chat', 'new_message', 'message_status'],
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    return res.json({
      success: true,
      webhooks: mockWebhooks
    });
  } catch (error) {
    console.error('Get webhooks error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route GET /api/webhooks/:id
 * @desc Get webhook by ID
 * @access Private/Admin
 */
const getWebhookById: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    const mockWebhook = {
      id,
      companyId: 'company1',
      name: 'Lead Integration',
      url: 'https://example.com/webhook/leads',
      secret: 'your_webhook_secret_here',
      events: ['new_message', 'message_status'],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.json({
      success: true,
      webhook: mockWebhook
    });
  } catch (error) {
    console.error('Get webhook error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route POST /api/webhooks
 * @desc Create a new webhook
 * @access Private/Admin
 */
const createWebhook: RouterHandler = async (req, res) => {
  try {
    const { companyId, name, url, events } = req.body;
    
    // Generate a webhook secret
    const secret = `whsec_${Math.random().toString(36).substring(2, 15)}`;
    
    // Mock implementation for now
    const mockWebhook = {
      id: 'new-webhook-id',
      companyId,
      name,
      url,
      secret,
      events,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.status(201).json({
      success: true,
      webhook: mockWebhook
    });
  } catch (error) {
    console.error('Create webhook error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route PUT /api/webhooks/:id
 * @desc Update a webhook
 * @access Private/Admin
 */
const updateWebhook: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url, events, isActive } = req.body;
    
    // Mock implementation for now
    const mockWebhook = {
      id,
      companyId: 'company1',
      name,
      url,
      secret: 'your_webhook_secret_here', // Existing secret
      events,
      isActive,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.json({
      success: true,
      webhook: mockWebhook
    });
  } catch (error) {
    console.error('Update webhook error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route DELETE /api/webhooks/:id
 * @desc Delete a webhook
 * @access Private/Admin
 */
const deleteWebhook: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    return res.json({
      success: true,
      message: `Webhook with ID ${id} deleted successfully`
    });
  } catch (error) {
    console.error('Delete webhook error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route POST /api/webhooks/:id/test
 * @desc Test a webhook by sending a test event
 * @access Private/Admin
 */
const testWebhook: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    return res.json({
      success: true,
      message: `Test event sent to webhook with ID ${id}`,
      status: 'delivered'
    });
  } catch (error) {
    console.error('Test webhook error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route POST /api/webhooks/:id/rotate-secret
 * @desc Rotate the webhook secret
 * @access Private/Admin
 */
const rotateWebhookSecret: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Generate a new webhook secret
    const newSecret = `whsec_${Math.random().toString(36).substring(2, 15)}`;
    
    // Mock implementation for now
    return res.json({
      success: true,
      message: `Secret rotated for webhook with ID ${id}`,
      webhook: {
        id,
        secret: newSecret
      }
    });
  } catch (error) {
    console.error('Rotate webhook secret error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Register routes
router.get('/', getWebhooks);
router.get('/:id', getWebhookById);
router.post('/', createWebhook);
router.put('/:id', updateWebhook);
router.delete('/:id', deleteWebhook);
router.post('/:id/test', testWebhook);
router.post('/:id/rotate-secret', rotateWebhookSecret);

export default router;
