import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'syr';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;