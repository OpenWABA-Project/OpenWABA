import { Router } from 'express';
import { RouterHandler } from '../../types/express';

const router = Router();

/**
 * @route GET /api/companies
 * @desc Get companies (filtered by agency for admin)
 * @access Private
 */
const getCompanies: RouterHandler = async (req, res) => {
  try {
    // Mock implementation for now
    const mockCompanies = [
      {
        id: 'company1',
        agencyId: 'agency1',
        name: 'Company One',
        slug: 'company-one',
        logoUrl: 'https://example.com/logo1.png',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'company2',
        agencyId: 'agency1',
        name: 'Company Two',
        slug: 'company-two',
        logoUrl: 'https://example.com/logo2.png',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    return res.json({
      success: true,
      companies: mockCompanies
    });
  } catch (error) {
    console.error('Get companies error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.get('/', getCompanies);

/**
 * @route GET /api/companies/:id
 * @desc Get company by ID
 * @access Private
 */
const getCompanyById: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    const mockCompany = {
      id,
      agencyId: 'agency1',
      name: 'Company One',
      slug: 'company-one',
      logoUrl: 'https://example.com/logo1.png',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.json({
      success: true,
      company: mockCompany
    });
  } catch (error) {
    console.error('Get company error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.get('/:id', getCompanyById);

/**
 * @route POST /api/companies
 * @desc Create a new company
 * @access Private/Admin
 */
const createCompany: RouterHandler = async (req, res) => {
  try {
    const { agencyId, name, slug, logoUrl } = req.body;
    
    // Mock implementation for now
    const mockCompany = {
      id: 'new-company-id',
      agencyId,
      name,
      slug,
      logoUrl,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.status(201).json({
      success: true,
      company: mockCompany
    });
  } catch (error) {
    console.error('Create company error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.post('/', createCompany);

/**
 * @route PUT /api/companies/:id
 * @desc Update a company
 * @access Private/Admin
 */
const updateCompany: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug, logoUrl, isActive } = req.body;
    
    // Mock implementation for now
    const mockCompany = {
      id,
      agencyId: 'agency1',
      name,
      slug,
      logoUrl,
      isActive,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    return res.json({
      success: true,
      company: mockCompany
    });
  } catch (error) {
    console.error('Update company error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.put('/:id', updateCompany);

/**
 * @route DELETE /api/companies/:id
 * @desc Delete a company
 * @access Private/Admin
 */
const deleteCompany: RouterHandler = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Mock implementation for now
    return res.json({
      success: true,
      message: `Company with ID ${id} deleted successfully`
    });
  } catch (error) {
    console.error('Delete company error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

router.delete('/:id', deleteCompany);

export default router;
