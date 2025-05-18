import express from 'express';
import { RouterHandler } from '../../types/express';

const router = express.Router();

/**
 * @route GET /api/agencies
 * @desc Get all agencies (for super admin)
 * @access Private/SuperAdmin
 */
const getAgencies: RouterHandler = async (req, res) => {
  try {
    // Mock implementation for now
    const mockAgencies = [
      {
        id: 'agency1',
        name: 'Agency One',
        slug: 'agency-one',
        logoUrl: 'https://example.com/logo1.png',
        primaryColor: '#4CAF50',
        secondaryColor: '#2E7D32',
        domains: ['agency-one.example.com'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'agency2',
        name: 'Agency Two',
        slug: 'agency-two',
        logoUrl: 'https://example.com/logo2.png',
        primaryColor: '#2196F3',
        secondaryColor: '#1565C0',
        domains: ['agency-two.example.com'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    return res.json({
      success: true,
      agencies: mockAgencies
    });
  } catch (error) {
    console.error('Get agencies error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.get('/', getAgencies);

/**
 * @route GET /api/agencies/:id
 * @desc Get agency by ID
 * @access Private/SuperAdmin
 */
const getAgencyById: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    const mockAgency = {
      id,
      name: 'Agency One',
      slug: 'agency-one',
      logoUrl: 'https://example.com/logo1.png',
      primaryColor: '#4CAF50',
      secondaryColor: '#2E7D32',
      domains: ['agency-one.example.com'],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.json({
      success: true,
      agency: mockAgency
    });
  } catch (error) {
    console.error('Get agency error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.get('/:id', getAgencyById);

/**
 * @route POST /api/agencies
 * @desc Create a new agency
 * @access Private/SuperAdmin
 */
const createAgency: RouterHandler = async (req, res) => {
  try {
    const { name, slug, logoUrl, primaryColor, secondaryColor, domains } = req.body;
    
    // Mock implementation for now
    const mockAgency = {
      id: 'new-agency-id',
      name,
      slug,
      logoUrl,
      primaryColor,
      secondaryColor,
      domains,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.status(201).json({
      success: true,
      agency: mockAgency
    });
  } catch (error) {
    console.error('Create agency error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.post('/', createAgency);

/**
 * @route PUT /api/agencies/:id
 * @desc Update an agency
 * @access Private/SuperAdmin
 */
const updateAgency: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, logoUrl, primaryColor, secondaryColor, domains } = req.body;
    
    // Mock implementation for now
    const mockAgency = {
      id,
      name,
      slug,
      logoUrl,
      primaryColor,
      secondaryColor,
      domains,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.json({
      success: true,
      agency: mockAgency
    });
  } catch (error) {
    console.error('Update agency error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.put('/:id', updateAgency);

/**
 * @route DELETE /api/agencies/:id
 * @desc Delete an agency
 * @access Private/SuperAdmin
 */
const deleteAgency: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    return res.json({
      success: true,
      message: `Agency with ID ${id} deleted successfully`
    });
  } catch (error) {
    console.error('Delete agency error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.delete('/:id', deleteAgency);

export default router;
