import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'gd';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;