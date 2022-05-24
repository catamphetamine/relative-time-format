import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GM';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;