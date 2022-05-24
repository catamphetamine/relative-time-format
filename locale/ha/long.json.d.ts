import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ha';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;