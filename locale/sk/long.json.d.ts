import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sk';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;