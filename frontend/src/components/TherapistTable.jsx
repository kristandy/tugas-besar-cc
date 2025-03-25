// src/components/TherapistTable.jsx
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const TherapistTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
  const [editId, setEditId] = useState(null);

  // Kolom untuk tabel
  const columns = [
    {
      title: 'Nama Terapis',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Jenis Kelamin',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Keahlian',
      dataIndex: 'skill',
      key: 'skill',
    },
    {
      title: 'Lokasi',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Jam Kerja',
      dataIndex: 'schedule',
      key: 'schedule',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const fetchData = async () => {
    try {
      setLoading(true);
      // Sesuaikan URL API Anda
      const res = await axios.get('http://localhost:3000/api/therapists');
      setData(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = () => {
    setIsEdit(false);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (record) => {
    setIsEdit(true);
    setEditId(record.id);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/therapists/${id}`);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (isEdit) {
        await axios.put(`http://localhost:3000/api/therapists/${editId}`, values);
      } else {
        await axios.post(`http://localhost:3000/api/therapists`, values);
      }
      setIsModalOpen(false);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header dengan judul dan tombol di ujung kanan */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <h1 style={{ margin: 0 }}>Daftar Terapis</h1>
        <Button type="primary" onClick={handleAdd}>
          Tambah Terapis
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        rowKey="id"
        loading={loading}
      />

      <Modal
        title={isEdit ? 'Edit Terapis' : 'Tambah Terapis'}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Nama Terapis"
            name="name"
            rules={[{ required: true, message: 'Masukkan nama terapis!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Jenis Kelamin"
            name="gender"
            rules={[{ required: true, message: 'Pilih jenis kelamin!' }]}
          >
            <Select placeholder="Pilih jenis kelamin">
              <Option value="Laki-laki">Laki-laki</Option>
              <Option value="Perempuan">Perempuan</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Keahlian"
            name="skill"
            rules={[{ required: true, message: 'Masukkan keahlian!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Lokasi"
            name="location"
            rules={[{ required: true, message: 'Masukkan lokasi!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Jam Kerja"
            name="schedule"
            rules={[{ required: true, message: 'Masukkan jam kerja!' }]}
          >
            <Input placeholder="Contoh: Senin - Shift 1: 5-8 pm" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TherapistTable;
