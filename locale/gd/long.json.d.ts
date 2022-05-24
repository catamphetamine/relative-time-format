import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'gd';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;