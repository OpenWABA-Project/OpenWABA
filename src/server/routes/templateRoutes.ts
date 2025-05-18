import { Router } from 'express';
import { RouterHandler } from '../../types/express';

const router = Router();

/**
 * @route GET /api/templates
 * @desc Get message templates (filtered by company)
 * @access Private
 */
const getTemplates: RouterHandler = async (req, res) => {
  try {
    // Mock implementation for now
    const mockTemplates = [
      {
        id: 'template1',
        companyId: 'company1',
        name: 'welcome_message',
        category: 'MARKETING',
        language: 'en_US',
        status: 'APPROVED',
        components: [
          {
            type: 'HEADER',
            format: 'TEXT',
            text: 'Welcome to {{1}}!'
          },
          {
            type: 'BODY',
            text: 'Hello {{1}}, we are excited to have you on board. Your account has been successfully created.'
          },
          {
            type: 'FOOTER',
            text: 'Reply to this message if you have any questions.'
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'template2',
        companyId: 'company1',
        name: 'order_confirmation',
        category: 'UTILITY',
        language: 'en_US',
        status: 'APPROVED',
        components: [
          {
            type: 'HEADER',
            format: 'TEXT',
            text: 'Order Confirmation'
          },
          {
            type: 'BODY',
            text: 'Dear {{1}}, your order #{{2}} has been confirmed. It will be delivered by {{3}}. Total amount: {{4}}.'
          },
          {
            type: 'FOOTER',
            text: 'Thank you for shopping with us!'
          }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    return res.json({
      success: true,
      templates: mockTemplates
    });
  } catch (error) {
    console.error('Get templates error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route GET /api/templates/:id
 * @desc Get template by ID
 * @access Private
 */
const getTemplateById: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    const mockTemplate = {
      id,
      companyId: 'company1',
      name: 'welcome_message',
      category: 'MARKETING',
      language: 'en_US',
      status: 'APPROVED',
      components: [
        {
          type: 'HEADER',
          format: 'TEXT',
          text: 'Welcome to {{1}}!'
        },
        {
          type: 'BODY',
          text: 'Hello {{1}}, we are excited to have you on board. Your account has been successfully created.'
        },
        {
          type: 'FOOTER',
          text: 'Reply to this message if you have any questions.'
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.json({
      success: true,
      template: mockTemplate
    });
  } catch (error) {
    console.error('Get template error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route POST /api/templates
 * @desc Create a new template
 * @access Private
 */
const createTemplate: RouterHandler = async (req, res) => {
  try {
    const { companyId, name, category, language, components } = req.body;
    
    // Mock implementation for now
    const mockTemplate = {
      id: 'new-template-id',
      companyId,
      name,
      category,
      language,
      status: 'PENDING',
      components,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.status(201).json({
      success: true,
      template: mockTemplate
    });
  } catch (error) {
    console.error('Create template error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route PUT /api/templates/:id
 * @desc Update a template
 * @access Private
 */
const updateTemplate: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, language, components } = req.body;
    
    // Mock implementation for now
    const mockTemplate = {
      id,
      companyId: 'company1',
      name,
      category,
      language,
      status: 'PENDING', // Status reverts to pending when template is modified
      components,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.json({
      success: true,
      template: mockTemplate
    });
  } catch (error) {
    console.error('Update template error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route DELETE /api/templates/:id
 * @desc Delete a template
 * @access Private
 */
const deleteTemplate: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    return res.json({
      success: true,
      message: `Template with ID ${id} deleted successfully`
    });
  } catch (error) {
    console.error('Delete template error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

/**
 * @route POST /api/templates/:id/submit
 * @desc Submit a template for approval
 * @access Private
 */
const submitTemplate: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    const mockTemplate = {
      id,
      companyId: 'company1',
      name: 'welcome_message',
      category: 'MARKETING',
      language: 'en_US',
      status: 'SUBMITTED',
      components: [
        {
          type: 'HEADER',
          format: 'TEXT',
          text: 'Welcome to {{1}}!'
        },
        {
          type: 'BODY',
          text: 'Hello {{1}}, we are excited to have you on board. Your account has been successfully created.'
        },
        {
          type: 'FOOTER',
          text: 'Reply to this message if you have any questions.'
        }
      ],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.json({
      success: true,
      template: mockTemplate
    });
  } catch (error) {
    console.error('Submit template error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Register routes
router.get('/', getTemplates);
router.get('/:id', getTemplateById);
router.post('/', createTemplate);
router.put('/:id', updateTemplate);
router.delete('/:id', deleteTemplate);
router.post('/:id/submit', submitTemplate);

export default router;
