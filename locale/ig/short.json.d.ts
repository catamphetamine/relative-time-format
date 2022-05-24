import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ig';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;