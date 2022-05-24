import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'dz';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;